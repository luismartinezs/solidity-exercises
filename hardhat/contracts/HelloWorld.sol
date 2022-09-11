// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract HelloWorld {
    uint256 public meaning = 42;

    function getMeaning() public view returns (uint256) {
        return meaning;
    }

    function setMeaning(uint256 _meaning) public {
        meaning = _meaning;
    }
}
