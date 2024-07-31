const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

// npx hardhat test test/call.js 
describe("call", async function () {
    it("should deploy contract and call functions", async function () {
        // const lockedAmount = ethers.utils.parseEther("0.1"); // or any other amount you want
        const construtor_args = []
        /*
        value (BigNumberish)：可以在合约部署时发送的以太金额。这个值会转账给合约的地址。例如，如果你想发送 0.1 ETH，则可以使用 ethers.utils.parseEther("0.1")。
        gasLimit (Number)：要为合约的创建交易指定的 gas 限制，通常不会设置，除非有特别需要。
        gasPrice (BigNumberish)：指定的 gas 价格。可以使用默认设置。
        from (string)：要部署合约的账户地址，通常可以省略，适用于当前钱包地址。
        */
        const options = {}

        console.info("start")
        await ethers.getContractFactory("Data")
        console.info("1")
        const d = await ethers.deployContract("Data", construtor_args, options)
        console.info(2)
        const r = await hre.ethers.deployContract("MultiCall")
        console.info(3)
        const d1 = await d.get()
        console.info(4)
        await r.call(d, 1000)
        console.info(5)
        const d2 = await d.get()
        console.info(6)
        console.info(`d1,d2 ${d1},${d2}`)
    });
})
