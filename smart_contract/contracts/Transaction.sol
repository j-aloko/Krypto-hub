//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0; 


contract Transaction{

    uint TransactionCount;

    event callback(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStructure{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStructure[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {

        transactions.push(TransferStructure(msg.sender,receiver,amount,message,block.timestamp,keyword));

        emit callback(msg.sender,receiver,amount,message,block.timestamp,keyword);

        TransactionCount +=1;

    }

    function getAllTransactions() public view returns(TransferStructure[] memory){
        return transactions;
    }

    function getTransactionCount() public view returns(uint256){
        return TransactionCount;
    }

}