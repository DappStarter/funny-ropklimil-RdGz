require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strong dash script horn harvest hero force giggle'; 
let testAccounts = [
"0x7e027719068b9813f56bfd3493994ecbc77c86073e8c801b499b2284e759d4bd",
"0x82bd0763e4f16303c6d19a392787f36266a4e48f1e59f534e7b0c86e2cfd2f68",
"0xe0cb395dae5ff4be2c7f9dc805d7657ee56e1ef478a791c498630ebd1927294d",
"0x29361781a0035a8a58d8c339887b78bedb11e895adfca8e994d6f016307ecf99",
"0x3e0b3283fe90384170de153c9d3fc81fbbca2c0aed9b861d124cc210ad43783c",
"0xd70c44626fa10bd9a4ebbb5976ef9897b333c508e59e767e1ce5a621a46c0697",
"0xe3416696be6266858f289c9f9c436fddd4caad21a15c42c9063cf77ca0424919",
"0x31366f47844cc5dec477c903a2170aa4fd49d06176dde9a9fbfaf3e5603e084a",
"0xdb053a8aa1312ca937249cbf74ca360c913049a2e517a110d6cbd50aaf062b5d",
"0x1fb5c99edcf8253200ddcc76b715fc181f1a4c9c1a1e4ae1e707aed580181569"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


