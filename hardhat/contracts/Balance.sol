// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Balance {
  function getBalance(address _account) public view returns (uint256) {
    return _account.balance;
  }
}