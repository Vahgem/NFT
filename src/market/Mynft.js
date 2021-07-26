import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Mynftcard from "./Mynftcard";
import ParticlesBg from "particles-bg";
import { useAlert } from "react-alert";
import ParticlesBg from "particles-bg";
import "./Marketplace.css";
const Mynft = ({ accountAddress }) => {
  const [mynft, Setmynft] = useState([]);
  const alert = useAlert();
  const getNft = async () => {
    console.log(accountAddress);
    if (accountAddress === "") {
      alert.error("No wallet connected");
    } else {
      try {
        const response = await axios.get(
          `https://rinkeby-api.opensea.io/api/v1/assets?owner=${accountAddress}&asset_contract_address=0x4c79E9008cF09C908C051008EA258580875f41A3`
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
    <div className="nftcardgroup">
<<<<<<< HEAD
       <ParticlesBg type="balls" bg={true} />
      {mynft && mynft.map((nft) => <Mynftcard key={nft.id} nft={nft} />)}
      <ParticlesBg type="balls" bg={true} />
=======
      {mynft.length > 0 ? (
        <div>
          <ParticlesBg bg={true} type="balls" />
          {mynft.map((nft) => (
            <Mynftcard key={nft.id} nft={nft} />
          ))}
          <ParticlesBg bg={true} type="balls" />
        </div>
      ) : (
        <section
          style={{
            fontSize: "50px",
            fontWeight: "900",
            color: "#FFFFFF",
            marginTop: "25rem",
            marginLeft: "13em",
          }}
        >
          No NFTs Owned
        </section>
      )}
>>>>>>> f01e8a0b1af9a12957506e34b824bb6a77535cb3
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  accountAddress: user.accountAddress,
});
export default connect(mapStateToProps)(Mynft);
