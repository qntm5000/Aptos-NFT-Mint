export const candyMachineAddress = "0xaae2fdba212b79cac0559a232064e22da1340c1435728bbca0d881a4d84d6361";

export const collectionName = "XCORP"; // Case sensitive!
export const MaxMint = 2
export const COLLECTION_SIZE = 3200 

// To remove the background of the dapp to a solid color just delete the "collectionCoverUrl" url below
// Any hosted image can be used
export const collectionCoverUrl = "https://i.ibb.co/ysHqrv1/nfts.gif";
export const collectionBackgroundUrl = "https://i.ibb.co/8PRv1qW/background.webp";

export const mode = "dev"; // "dev" or "test" or "mainnet"
export let NODE_URL;
export const CONTRACT_ADDRESS = "0x5b71b400de0767bcec88464c33a0c74c839737206883a9379252f4907b8bf30e";
export const SERVICE_NAME = "ftmpad"
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
