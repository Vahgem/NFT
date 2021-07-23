import React from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import "./Card.css";
const opensea = require("opensea-js");

const provider = new WalletConnectProvider({
  infuraId: "3610b5ef9a864d4dbd6ec3fc0e186935",
});
const OpenSeaPort = opensea.OpenSeaPort;
const Network = opensea.Network;

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Rinkeby,
});
const Mynftcard = ({ nft }) => {
  console.log(nft);
  const Sell = async () => {
    //Modal

    console.log("sell");
    try {
      await provider.enable();
      const web3 = new Web3(provider);
      const accountAddress = await web3.eth.getAccounts();
      const expirationTime = Math.round(Date.now() / 1000 + 60 * 60 * 24);
      const listing = await seaport.createSellOrder({
        asset: {
          tokenId: nft.token_id,
          tokenAddress: "0xB6532f3a7CCB26c119D6f3fAccaF6Dd5bf4B5ff2",
        },
        accountAddress: accountAddress[0],
        startAmount: 3,
        endAmount: 3,
        expirationTime,
      });
      console.log(listing);
      await provider.disconnect();
    } catch (e) {
      await provider.disconnect();

      window.location.reload();
      if (e.message !== "User closed modal") alert(e.message);
    }
  };
  return (
    <div>
      <div className="cards_items">
        <embed src={nft.image_url} />
        <div className="desc">
          <div className="titles">
            <div className="name">{nft.name}</div>
            <div className="code">{nft.description}</div>
          </div>

          {/* <div className="price">
              <div className="pn">Price</div>
              <div className="pval">
                {nft.sell_orders &&
                  parseInt(nft.sell_orders[0].base_price, 10) /
                    Math.pow(10, 18)}
              </div>
            </div> */}
        </div>
        <br />
        <input type="button" value="Sell" onClick={Sell} />
      </div>
    </div>
  );
};

export default Mynftcard;
