import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Marketplace.css";
import ParticlesBg from "particles-bg";

export default function Marketplace() {
  const [market, SetMarket] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://rinkeby-api.opensea.io/api/v1/assets?asset_contract_address=0x4c79E9008cF09C908C051008EA258580875f41A3"
      );
      const temp = response.data.assets.filter((asset) => !!asset.sell_orders);
      SetMarket(temp);
      console.log(market);
    } catch (e) {
      console.log(e);
    }

    //console.log(response.data.assets[2].sell_orders[0].base_price);
  };
  useEffect(() => {
    getData(); //eslint-disable-next-line
  }, []);
  return (
    <div className="nftcardgroup" style={{ marginTop: "0px" }}>
      {market && (
        <div>
          {" "}
          <ParticlesBg bg={true} type="square" />
          {market.map((nft) => (
            <Card key={nft.id} nft={nft} />
          ))}
          <ParticlesBg bg={true} type="square" />
        </div>
      )}
    </div>
  );
}
