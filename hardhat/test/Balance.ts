import { expect } from "chai";
import hre from "hardhat";
import { ethers } from "hardhat";

describe("Balance", function () {
  it("Should be able to get address balance", async function () {
    const [owner] = await ethers.getSigners();

    const Balance = await hre.ethers.getContractFactory("Balance");
    const balance = await Balance.deploy();

    expect(await balance.getBalance(owner.getAddress())).to.equal(await owner.getBalance());
  });
});
