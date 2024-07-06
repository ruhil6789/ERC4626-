require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const privateKey = process.env.ACCOUNT_OWNER_PVT_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",

  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true
    },
  },
  networks: {
    bscTestnet: {
      // url: "https://bsc-testnet.publicnode.com",
      url: process.env.BSC_RPC,
      chainId: 97,
      accounts: [privateKey]
    },
    mumbai: {
      url: "https://bsc-testnet.publicnode.com",
      // url: API_URL,
      accounts: [privateKey]
    }

  },
  etherscan: {
    apiKey: {
      bscTestnet: process.env.BSC_API_KEY,    //bsc
      polygonMumbai: process.env.MUMBAI_API_KEY
    }
  }

};
