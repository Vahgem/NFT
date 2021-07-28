import React from "react";
import "./Card.css";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { OrderSide } from "opensea-js/lib/types";

import { useAlert } from "react-alert";

const opensea = require("opensea-js");

const provider = new WalletConnectProvider({
  infuraId: "3610b5ef9a864d4dbd6ec3fc0e186935",
  qrcode: true,
});
const OpenSeaPort = opensea.OpenSeaPort;
const Network = opensea.Network;

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Rinkeby,
});
const Card = ({ nft }) => {
  const alert = useAlert();

  const Purchase = async (event) => {
    event.preventDefault();
    try {
      await provider.enable();
      const web3 = new Web3(provider);

      const orders1 = await seaport.api.getOrders({
        asset_contract_address: "0x4c79E9008cF09C908C051008EA258580875f41A3",
        token_id: nft.token_id,
        side: OrderSide.Sell,
      });

      let orders = orders1.orders[0];
      const accounts = await web3.eth.getAccounts();
      const accountAddress = accounts[0];
      console.log("2", orders, accountAddress, orders1);
      const referrerAddress = "0xd32598dE51B64BBF0ABA45A34a58C2d365266Eb8";

      const response = await seaport.fulfillOrder({
        order: orders,
        accountAddress,
        referrerAddress,
      });
      if (response) {
        alert.success("NFT successfully Purchased");
      }
      console.log(response);

      await provider.disconnect();
    } catch (e) {
      if (e.message !== "User closed modal") {
        alert.show(e.message);
        await provider.disconnect();
      } else {
        await provider.disconnect();
        window.location.reload();
      }
    }
  };

  return (
    <div className="cards_items" style={{ width: "300px", maxHeight: "auto" }}>
      <embed
        type={nft.type}
        src={nft.image_url}
        style={{
          objectFit: "contain",
          overflow: "hidden",
          width: "100%",
          height: "200px",
        }}
      />
      <div className="desc">
        <div className="titles">
          <div className="name" style={{ color: "white", fontWeight: "700" }}>
            {nft.name}
          </div>
          <div className="code" style={{ color: "white" }}>
            {nft.description}
          </div>
        </div>
        <div className="price">
          <div className="pn" style={{ color: "white", fontWeight: "700" }}>
            Price
          </div>
          <div className="pval" style={{ color: "white", fontWeight: "700" }}>
            {nft.sell_orders &&
              parseInt(nft.sell_orders[0].base_price, 10) /
                Math.pow(10, 18)}{" "}
            Ether
          </div>
        </div>
      </div>
      <br />
      <input
        type="button"
        value="Purchase"
        onClick={Purchase}
        style={{
          marginLeft: "25%",
          width: "50%",
          borderRadius: "12px",
          backgroundColor: "green",
        }}
      />
    </div>
  );
};

export default Card;
