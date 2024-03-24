
const {Web3CoreHelpers} = require("web3-core-helpers");

const web3CoreHelpers = new Web3CoreHelpers(provider);

const hash = '0x...';

web3CoreHelpers.devInspectTransactionBlock(hash).then(console.log);

