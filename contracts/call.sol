
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/utils/Strings.sol";

contract MultiCall {
    using Strings for uint256;

    function call(address addr, uint256 inputs) public {
        (bool success, bytes memory output) = addr.call(
            abi.encodeWithSignature("set(uint256)", inputs)
        );
        require(output.length >= 0);
        require(success);
    }

    struct Call {
        address addr;
        bytes data;
    }
    constructor() {}
    function multicall(Call[] memory calls) public {
        for (uint256 i = 0; i < calls.length; i++) {
            (bool success, ) = calls[i].addr.call(calls[i].data);
            require(
                success,
                string(abi.encodePacked("Call failed at index: ", i.toString()))
            );
        }
    }
}

contract Data {
    uint256 public data;

    constructor() {
        data = 100;
    }

    function get() public view returns (uint256) {
        return data;
    }

    function set(uint256 new_data) public {
        data = new_data;
    }

    function getSelector() public pure returns (bytes4) {
        // return Data.get.selector;
        return this.get.selector;
    }
}
