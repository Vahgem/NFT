import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Mynftcard from "./Mynftcard";
const Mynft = ({ accountAddress }) => {
  const [mynft, Setmynft] = useState([]);
  const getNft = async () => {
    console.log(accountAddress);
    if (accountAddress === "") {
      alert("No wallet connected");
    } else {
      try {
        const response = await axios.get(
          `https://rinkeby-api.opensea.io/api/v1/assets?owner=${accountAddress}&asset_contract_address=0xb6532f3a7ccb26c119d6f3faccaf6dd5bf4b5ff2`
        );
        console.log(response.data.assets);
        Setmynft(response.data.assets);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    getNft(); //eslint-disable-next-line
  }, []);
  return (
    <div>
      {mynft && mynft.map((nft) => <Mynftcard key={nft.id} nft={nft} />)}
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  accountAddress: user.accountAddress,
});
export default connect(mapStateToProps)(Mynft);
