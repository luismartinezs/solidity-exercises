import { expect } from "chai";
import hre from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("HelloWorld", function () {
  async function deployHelloWorld () {
    const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();

    return {
      helloWorld
    }
  }

  it("Should be able to get meaning", async function () {
    const {helloWorld} = await loadFixture(deployHelloWorld)

    expect(await helloWorld.getMeaning()).to.equal(42);
  });
  it("Should be able to set meaning", async function () {
    const {helloWorld} = await loadFixture(deployHelloWorld)

    await helloWorld.setMeaning(43);
    expect(await helloWorld.getMeaning()).to.equal(43);
  });
});
