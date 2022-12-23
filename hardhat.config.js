require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "goerli",
  solidity: {
    compilers: [
      {
        version: "0.7.3",
      },
      {
        version: "0.8.4",
      },
    ],
  },
  networks: {
    goerli: {
      url: process.env.GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
