const hre = require("hardhat");
const { ethers } = require("hardhat");


async function main() {
  
  const bookRecordContract = await ethers.deployContract("BookLibrary");

  console.log(" Contract Address: ", await bookRecordContract.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
