const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "fall crack place pulse mask expose blush perfect bounce three report museum";

module.exports = {

  networks: {
  
      mode: 'development',

      development: {
        host: "127.0.0.1",     // Localhost (default: none)
        port: 9545,            // Standard Ethereum port (default: none)
        network_id: "*",       // Any network (default: none)
        },

        rinkeby: {
          provider: () => new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/b155de69b23546e0b25fb38a88ef6fec'),                                             
            network_id: 4,       // rinkeby's id
            gas: 4500000,        // rinkeby has a lower block limit than mainnet
            gasPrice: 10000000000
        }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}



