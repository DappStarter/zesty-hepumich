require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'kidney clog tackle venture story crawl scrub pumpkin harvest brave army genre'; 
let testAccounts = [
"0x357755119e8ce81dff379896f56e43769a6ab88a3dd993d5df9c0af3751b7538",
"0xd8c5d34bfe1e0170541a86ad90554bc79009c3c043dba1b0ca4e8af786bde70a",
"0xb2ed0446fb44f87d20769e8ed94d0142c0b587872aa836134bcb66112a31d644",
"0x3c5641cb19e137e09b4944bfa2a4ecd11fc66b9a40262ecbe134a6f0b7a860be",
"0x690ab570f72881943bad7ff7275169a10c9d2c07b875edfa889b5770f21db7cd",
"0x516840c0eb2b202b4699770f4478117ef91669c93122f3fed6b00f7840d174da",
"0xb9fedf7d0319a3912bc1e45167c4859f49869d749fb12351a4d91ae4db2c8d7d",
"0xabe19c2d4cde1ca9892196c6907981b41d45f95b69a45e2eb34bc3c3ad4c4775",
"0x9efbb34b72882dcefb3ba2bb194c20d1a22a5c61384ae2782dee4d4574c69442",
"0x6b5827b44d1ee15c2b4ef1f8474390e02dcd4f99eb3bc17dc9cf14e11a3e068e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


