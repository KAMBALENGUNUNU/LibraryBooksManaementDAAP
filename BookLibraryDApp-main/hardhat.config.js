require("@nomicfoundation/hardhat-toolbox");
const SEPOLIA_PRIVATE_KEY = "748b416be6f8d2503314184ceac28b7f33be18fd582f99daadf799253d7e30c4";

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url:`https://sepolia.infura.io/v3/153bc51f4baf4586b91105ea068c0bc0`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
  
};
