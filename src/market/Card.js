import React from "react";
import "./Card.css";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { OrderSide } from "opensea-js/lib/types";

const opensea = require("opensea-js");

const provider = new WalletConnectProvider({
  infuraId: "3610b5ef9a864d4dbd6ec3fc0e186935",
});
const OpenSeaPort = opensea.OpenSeaPort;
const Network = opensea.Network;

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Rinkeby,
});
const Card = ({ nft }) => {
  const Purchase = async () => {
    await provider.enable();
    const web3 = new Web3(provider);
    try {
      const orders1 = await seaport.api.getOrders({
        asset_contract_address: "0xB6532f3a7CCB26c119D6f3fAccaF6Dd5bf4B5ff2",
        token_id: nft.token_id,
        side: OrderSide.Sell,
      });
      let orders = orders1.orders[0];
      const accounts = await web3.eth.getAccounts();
      const accountAddress = accounts[0];
      console.log("2", orders, accountAddress, orders1);
      const response = await seaport.fulfillOrder({
        order: orders,
        accountAddress,
      });
      console.log(response);
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
        <embed src={nft.image_url} style={{ width:"200px", height:"auto" }} />
        <div className="desc">
          <div className="titles">
            <div className="name">{nft.name}</div>
            <div className="code">{nft.description}</div>
          </div>

          <div className="price">
            <div className="pn">Price</div>
            <div className="pval">
              {nft.sell_orders &&
                parseInt(nft.sell_orders[0].base_price, 10) / Math.pow(10, 18)}
            </div>
          </div>
        </div>
        <br />
        <input type="button" value="Purchase" onClick={Purchase} />
      </div>
    </div>
  );
};

export default Card;
