import { expect } from "chai";
import hre from "hardhat";

describe('Primitives', () => {
  it('Should get primitives with default values', async () => {
    const Primitives = await hre.ethers.getContractFactory('Primitives');
    const primitives = await Primitives.deploy();

    expect(await primitives.getMyBool()).to.equal(false);
    expect(await primitives.getMyUint()).to.equal(0);
    expect(await primitives.getMyInt()).to.equal(0);
    expect(await primitives.getMyAddress()).to.equal('0x0000000000000000000000000000000000000000');
  })
})