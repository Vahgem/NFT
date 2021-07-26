import React, { useState, useEffect } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import axios from "axios";
import "./Card.css";
import Popup from "reactjs-popup";
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

const Mynftcard = ({ nft }) => {
  const [type, Settype] = useState("");

  console.log(nft);

  const Sell = async (event) => {
    event.preventDefault();
    console.log("sell", days, price);

    try {
      await provider.enable();
      const web3 = new Web3(provider);
      const accountAddress = await web3.eth.getAccounts();

      const expirationTime = Math.round(
        Date.now() / 1000 + 60 * 60 * (24 * parseInt(days))
      );

      const listing = await seaport.createSellOrder({
        asset: {
          tokenId: nft.token_id,
          tokenAddress: "0x4c79E9008cF09C908C051008EA258580875f41A3",
        },
        accountAddress: accountAddress[0],
        startAmount: price,
        endAmount: price,
        expirationTime,
      });

      console.log(listing);
      await provider.disconnect();
    } catch (e) {
      if (e.message !== "User closed modal") {
        alert(e.message);
      }
      await provider.disconnect();
      window.location.reload();
    }
  };

  const getIpfsdata = async () => {
    const data = await axios.get(`${nft.token_metadata}`);
    Settype(data.data.type);
  };

  useEffect(() => {
    getIpfsdata(); //eslint-disable-next-line
  }, []);

  const [days, setDays] = useState("0");
  const [price, setPrice] = useState("0.00");
  return (
    <div>
      <div className="cards_items" style={{ width: "350px" }}>
        <embed
          type={type === "image" ? "image/jpg" : "video/webm"}
          src={nft.image_url}
          alt={nft.name}
          style={{
            objectFit: "contain",
            overflow: "hidden",
            width: "100%",
            height: "250px",
          }}
        />
        <div className="desc">
          <div className="titles">
            <div className="name">{nft.name}</div>
            <div className="code">{nft.description}</div>
          </div>
        </div>
        <br />
        {nft.sell_orders ? (
          <div
            style={{
              color: "white",
              fontWeight: "700",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Already Listed at Price{" "}
            {parseInt(nft.sell_orders[0].base_price, 10) / Math.pow(10, 18)}{" "}
            Ethers
          </div>
        ) : (
          <Popup
            trigger={
              <button
                className="button"
                style={{ marginLeft: "10rem", width: "40%" }}
              >
                {" "}
                Sell Asset
              </button>
            }
            modal
          >
            <form
              style={{
                backgroundColor: "antiquewhite",
                padding: "15px",
              }}
            >
              <label>Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <label>Duration of selling period</label>
              <input
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                required
              />
              <br />
              <hr />
              <input
                type="submit"
                onClick={Sell}
                value="Sell"
                style={{ marginLeft: "5rem", width: "40%" }}
              />
            </form>{" "}
            )
          </Popup>
        )}
      </div>
    </div>
  );
};

export default Mynftcard;
