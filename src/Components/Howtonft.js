import React from "react";
import "./howto.css";
export default function Howtonft() {
  return (
    <section
      id="Howto"
      className="HowtoAll"
      style={{
        background: "rgba(252,255,0,0.3)",
        padding: "20px",
        paddingTop: "6rem",
        fontFamily: "Georgia, serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Georgia, serif",
          fontWeight: "600",
        }}
      >
        Create And Sell Your NFT
      </h1>
      <br />

      <ul className="Howto" style={{ color: "black" }}>
        <li>
          <i className="fa fa-suitcase fa-4x"></i>
          <h3>Connect Your Wallet</h3>
          <p style={{ fontSize: "19px" }}>
            Before accessing marketplace,connect your wallet to the application
            by clicking on connect wallet in the Navigation Bar.
          </p>
        </li>
        <li>
          <i className="fa fa-book fa-4x"></i>
          <h3>Create Your NFT</h3>
          <p style={{ fontSize: "19px" }}>
            Click on Create NFT and enter details of your NFT. Add name, a
            description profile and NFT content.
          </p>
        </li>
        <li>
          <i className="fa fa-picture-o fa-4x"></i>
          <h3>Buy Marketplace NFTs</h3>
          <p style={{ fontSize: "19px" }}>
            Click on your desired NFT within the marketplace to purchase it by
            confirming the required payment for the respective NFT.
          </p>
        </li>
      </ul>
    </section>
  );
}
