import React, { useState, useEffect, createContext } from "react";

import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionContract;
};

export const TransactionContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });

  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );

  const [transactionArray, setTransactionArray] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const transactionContract = getEthereumContract();

      const myTransactions = await transactionContract.getAllTransactions();

      const structuredTransactions = myTransactions?.map((transaction) => ({
        addressTo: transaction.receiver,
        addressFrom: transaction.sender,
        timestamp: new Date(
          transaction.timestamp.toNumber() * 1000
        ).toLocaleString(),
        message: transaction.message,
        keyword: transaction.keyword,
        amount: +transaction.amount._hex / 10 ** 18,
      }));

      console.log(structuredTransactions);
    } catch (error) {
      console.log(error);

      throw new Error("Unable to fetch transactions");
    }
  };

  const verifyWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum?.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        await getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No Ethereum Object Found");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum?.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No Ethereum object");
    }
  };

  const checkIfTransactionExist = async () => {
    try {
      const transactionContract = getEthereumContract();
      const transactioncount = await transactionContract.getTransactionCount();

      window.localStorage.setItem("transactionCount", transactioncount);
    } catch (error) {
      console.log(error);

      throw new Error("Transaction does not exist");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const transactionContract = getEthereumContract();
      const amount = ethers.utils.parseEther(formData.amount);
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: formData.addressTo,
            gas: "0x5208", //21000 GWEI
            value: amount._hex, //0.00001
          },
        ],
      });

      const transactionHash = await transactionContract.addToBlockchain(
        formData.addressTo,
        amount._hex,
        formData.message,
        formData.keyword
      );

      const transactioncount = await transactionContract.getTransactionCount();
      setTransactionCount(transactioncount.toNumber());

      checkIfTransactionExist();
    } catch (error) {
      console.log(error);

      throw new Error("No Ethereum object detected");
    }
  };

  useEffect(() => {
    verifyWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
      }}>
      {children}
    </TransactionContext.Provider>
  );
};
