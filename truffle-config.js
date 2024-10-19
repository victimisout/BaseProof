module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,         // Standard Ethereum port (Ganache)
      network_id: "*",    // Any network (default: none)
    },
    base: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, `https://mainnet.base.org`),
      network_id: 8453,    // Base mainnet network ID
      gas: 5000000,        // Gas limit
      gasPrice: 1000000000, // Gas price (1 gwei)
    },
  },

  // Compiler settings
  compilers: {
    solc: {
      version: "^0.8.0",   // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
