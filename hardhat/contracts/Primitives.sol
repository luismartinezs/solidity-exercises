// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Primitives {
  bool public myBool;
  uint public myUint;
  int public myInt;
  address public myAddress;

  function getMyBool() public view returns (bool) {
    return myBool;
  }

  function setMyBool(bool _myBool) public {
    myBool = _myBool;
  }

  function getMyUint() public view returns (uint) {
    return myUint;
  }

  function setMyUint(uint _myUint) public {
    myUint = _myUint;
  }

  function getMyInt() public view returns (int) {
    return myInt;
  }

  function setMyInt(int _myInt) public {
    myInt = _myInt;
  }

  function getMyAddress() public view returns (address) {
    return myAddress;
  }

  function setMyAddress(address _myAddress) public {
    myAddress = _myAddress;
  }
}