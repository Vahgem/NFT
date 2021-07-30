import Web3 from "web3";
//require("dotenv").config();

let web3;
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //in the browser and metamask running
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    process.env.REACT_APP_INFURA_URL
  );
  web3 = new Web3(provider);
}

export default web3;
