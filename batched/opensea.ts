import Web3 from "web3";
import { OpenSeaSDK, Network } from "opensea-js";
import "dotenv";

const provider = new Web3.providers.HttpProvider(
  "https://eth-mainnet.g.alchemy.com"
);

const openseaSDK = new OpenSeaSDK(<any>provider, {
  networkName: Network.Main,
  apiKey: process.env.OPENSEA_API_KEY,
});

async function retriveAllAssets() {
  const asset = await openseaSDK.api.getAssets;
  console.log(asset);
}
retriveAllAssets();
