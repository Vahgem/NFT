import React from "react";
import "./market.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Mynft from "./market/Mynft";
import "react-tabs/style/react-tabs.css";
import Popup from "./market/Popup.js";
import Marketplace from "./market/Marketplace.js";
import ParticlesBg from "particles-bg";
function Market() {

  return (
    <div className="market">

      <div>
        <nav
          id="nav-wrap"
          style={{ fontSize: "15px", fontWeight: "700",padding:"5px", opacity: "10", background: "linear-gradient(to right, #000099 0%, #ff0000 100%)" }}
        >
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li >
              <a
                className="smoothscroll"
                href="./">
                Home
              </a>
            </li>

            <li>
              <Popup />
            </li>

          </ul>
        </nav>
      </div>


      <br />
      <br />

      <Tabs defaultIndex={1}>
        <TabList style={{ display: "inline", margin: "0 10vw" }}>
          <Tab style={{ width: "35%", textAlign: "center" }}>MarketPlace</Tab>
          <Tab style={{ width: "35%", textAlign: "center" }}>Your NFTs</Tab>
        </TabList>
        <TabPanel>
          <div style={{ position: "relative",width: "100%",height:"auto",paddding:"100px"}}>
            <div style={{ position: "absolute",width: "100%",height:"auto"}}>
          <ParticlesBg type="square" position="fixed" width="100vw" height="100%" bg={true} />
              <Marketplace/>
            </div>
            </div>
        </TabPanel>
        <TabPanel>
          <div style={{position:"absolute"}}>
            <Mynft />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Market;
