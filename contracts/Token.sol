// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Token {
    string tokenname;
    uint public tokenCap;

    constructor(string memory _name, uint _cap) {
        tokenname = _name;
        tokenCap = _cap;
    }
}
