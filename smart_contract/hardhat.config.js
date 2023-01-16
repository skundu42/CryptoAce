require("@nomiclabs/hardhat-waffle");

require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  networks: {
    liberty: {
      url: "https://liberty20.shardeum.org",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "../client/src/artifacts",
  },
};
