hardhat 提示 solc 版本不一致: vscode setting Solidity: Default Compiler localFile

## OZ 字符串库

> import "@openzeppelin/contracts/utils/Strings.sol";

## 面试题: 如何保证主网测试网用同一个地址

使用相同的部署账户（相同的私钥）
确保该账户的 nonce 值相同
使用相同的合约字节码
使用CREATE2操作码

类似于solana的PDA和assiacate account, 通过salt/seed保证得到一样的地址

---

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
