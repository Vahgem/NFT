import React, { useEffect, useState } from "react";
import "./Card.css";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { OrderSide } from "opensea-js/lib/types";

import { useAlert } from "react-alert";
import axios from "axios";

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
  const [type, Settype] = useState("");

  const datewegot = nft.sell_orders[0].closing_date;
  let year = parseInt(datewegot.slice(0, 4));
  let month = parseInt(datewegot.slice(5, 7));
  let date = parseInt(datewegot.slice(8, 10));
  let hour = parseInt(datewegot.slice(11, 13));
  let min = parseInt(datewegot.slice(14, 16));
  min = min + 30;
  if (min >= 60) {
    min -= 60;
    hour += 6;
  } else {
    hour += 5;
  }
  if (hour >= 24) {
    hour -= 24;
    date += 1;
    if (month === 2 && date > 28) {
      month += 1;
      date = 1;
    } else if (
      (month === 4 || month === 6 || month === 9 || month === 11) &&
      date > 30
    ) {
      month += 1;
      date = 1;
    } else if (month !== 12 && date > 31) {
      month += 1;
      date = 1;
    } else if (month === 12 && date > 31) {
      year += 1;
      month = 1;
      date = 1;
    }
  }

  const Purchase = async (event) => {
    event.preventDefault();
    try {
      await provider.enable();
      const web3 = new Web3(provider);

      const orders1 = await seaport.api.getOrders({
        asset_contract_address: process.env.REACT_APP_TOKEN_ADDRESS,
        token_id: nft.token_id,
        side: OrderSide.Sell,
      });

      let orders = orders1.orders[0];
      const accounts = await web3.eth.getAccounts();
      const accountAddress = accounts[0];
      console.log("2", orders, accountAddress, orders1);
      const referrerAddress = process.env.REACT_APP_REFERRER_ADDRESS;

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

  const getIpfsData = async () => {
    const response = await axios.get(`${nft.token_metadata}`);
    Settype(response.data.type);
  };
  useEffect(() => {
    getIpfsData(); //eslint-disable-next-line
  }, []);

  return (
    <div
      className="cards_items"
      style={{ maxWidth: "300px", maxHeight: "auto" }}
    >
      {type === "image/jpg" ? (
        <img
          src={nft.image_url}
          alt={nft.name}
          style={{
            objectFit: "contain",
            overflow: "hidden !important",
            width: "100%",
            height: "200px",
          }}
        />
      ) : (
        <embed
          src={nft.image_url}
          alt={nft.name}
          style={{
            objectFit: "contain",
            overflow: "hidden !important",
            width: "100%",
            height: "200px",
          }}
        />
      )}
      <div className="desc">
        <div className="titles">
          <div
            className="name"
            style={{ color: "white", fontWeight: "700", fontSize: "18px" }}
          >
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
      <div>
        <h3
          style={{
            margin: "0",
            textAlign: "center",
            fontSize: "15px",
            color: "white",
          }}
        >
          Expires At: {date + "-" + month + "-" + year + " " + hour + ":" + min}
        </h3>
      </div>
    </div>
  );
};

export default Card;
