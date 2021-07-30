import React from "react";
import "./howto.css";
export default function Howtonft() {
  return (
    <section
      id="Howto"
      className="HowtoAll"
      style={{
        // background: "rgba(252,255,0,0.3)",
        width:"100%",
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
          color: "white",
          marginBottom: "20px",
        }}
      >
        Create And Sell Your NFT
      </h1>

      <ul className="Howto" style={{ color: "white" }}>
        <li>
          <i className="fa fa-suitcase fa-4x" style={{ color: "#B5EAEA" }}></i>
          <h3 style={{ color: "white" }}>Connect Your Wallet</h3>
          <p style={{ fontSize: "19px", fontWeight: "100" }}>
            Before accessing marketplace,connect your wallet to the application
            by clicking on connect wallet in the Navigation Bar.
          </p>
        </li>
        <li>
          <i className="fa fa-book fa-4x" style={{ color: "#B5EAEA" }}></i>
          <h3 style={{ color: "white" }}>Create Your NFT</h3>
          <p style={{ fontSize: "19px", fontWeight: "100" }}>
            Click on Create NFT and enter details of your NFT. Add name, a
            description profile and NFT content.
          </p>
        </li>
        <li>
          <i className="fa fa-picture-o fa-4x" style={{ color: "#B5EAEA" }}></i>
          <h3 style={{ color: "white" }}>Buy Marketplace NFTs</h3>
          <p style={{ fontSize: "19px", fontWeight: "100" }}>
            Click on your desired NFT within the marketplace to purchase it by
            confirming the required payment for the respective NFT.
          </p>
        </li>
      </ul>
    </section>
  );
}
