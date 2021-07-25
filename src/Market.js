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
        style={{ fontSize: "15px", fontWeight: "700", opacity: "10" }}
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
            <Popup/>
          </li>

        </ul>
      </nav>
      </div>


      <br />
      <br />
     
      <Tabs defaultIndex={1}>
        <TabList style={{ display: "inline",margin:"0 10vw" }}>
          <Tab style={{ width: "35%", textAlign: "center" }}>MarketPlace</Tab>
          <Tab style={{ width: "35%", textAlign: "center"}}>Your NFTs</Tab>
        </TabList>
        <TabPanel>
          <div>
          <ParticlesBg type="square" height="auto" bg={true} />
            <Marketplace />
          </div>
        </TabPanel>
        <TabPanel>
          <div>
          <ParticlesBg type="balls" height="auto" bg={true} />
            <Mynft />
            </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Market;
