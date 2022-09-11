import { expect } from "chai";
import hre from "hardhat";

describe("HelloWorld", function () {
  it("Should be able to get meaning", async function () {
    const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();

    expect(await helloWorld.getMeaning()).to.equal(42);
  });
  it("Should be able to set meaning", async function () {
    const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();

    await helloWorld.setMeaning(43);
    expect(await helloWorld.getMeaning()).to.equal(43);
  });
});
