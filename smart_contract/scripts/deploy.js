const hre = require("hardhat");

const main = async () => {
  const Transaction = await hre.ethers.getContractFactory("Transaction");
  const transactions = await Transaction.deploy();

  await transactions.deployed();

  console.log("Transaction deployed to:", transactions.address);
};

const runMain = async () => {
  try {
    await main();
    process.exitCode = 0;
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
};

runMain();
