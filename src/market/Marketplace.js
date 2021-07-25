import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";
import Card from "./Card";
import "./Marketplace.css";
export default function Marketplace() {
  const [market, SetMarket] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://rinkeby-api.opensea.io/api/v1/assets?asset_contract_address=0xb6532f3a7ccb26c119d6f3faccaf6dd5bf4b5ff2"
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
    <div className="cards">
      {market && market.map((nft) => <Card key={nft.id} nft={nft} />)}
    </div>
  );
}
