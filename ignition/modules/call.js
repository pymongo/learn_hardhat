const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LockModule", (m) => {
    const data = m.contract("Data", [unlockTime], {
        value: lockedAmount,
    });
    const multicall = m.contract("MultiCall", [unlockTime], {
        value: lockedAmount,
    });

    return { data, multicall };
});
