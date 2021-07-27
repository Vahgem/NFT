import React, { useState, useEffect } from "react";
import "./Card.css";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { OrderSide } from "opensea-js/lib/types";
import axios from "axios";
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
  const [type, Settype] = useState("");
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

      const response = await seaport.fulfillOrder({
        order: orders,
        accountAddress,
      });

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

  const getIpfsdata = async () => {
    const data = await axios.get(`${nft.token_metadata}`);
    Settype(data.data.type);
  };

  useEffect(() => {
    getIpfsdata(); //eslint-disable-next-line
  }, []);

  return (
    <div className="cards_items" style={{ width: "350px" }}>
      <embed
        type={type === "image" ? "image/jpg" : "video/webm"}
        src={nft.image_url}
        style={{
          objectFit: "contain",
          overflow: "hidden",
          width: "100%",
          height: "250px",
        }}
      />
      <div className="desc">
        <div className="titles">
          <div className="name" style={{ color: "white" }}>
            {nft.name}
          </div>
          <div className="code" style={{ color: "white" }}>
            {nft.description}
          </div>
        </div>
      </div>
      <div className="price">
        <div className="pn" style={{ color: "white" }}>
          Price
        </div>
        <div className="pval" style={{ color: "white" }}>
          {nft.sell_orders &&
            parseInt(nft.sell_orders[0].base_price, 10) / Math.pow(10, 18)}{" "}
          Ether
        </div>
      </div>
      <br />
      <input
        type="button"
        value="Purchase"
        onClick={Purchase}
        style={{ marginLeft: "2.2em", width: "40%", borderradius: "10px" }}
      />
    </div>
  );
};

export default Card;
