import React from "react";
import "./market.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Mynft from "./market/Mynft";
import "react-tabs/style/react-tabs.css";
import Popup from "./market/Popup.js";
import Marketplace from "./market/Marketplace.js";

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
            <li>
              <a className="smoothscroll" href="./">
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
      <hr />
      <Tabs defaultIndex={1}>
        <TabList
          style={{
            display: "inline",
            margin: "0 10vw",
            borderBottom: "3px solid white",
          }}
        >
          <Tab
            style={{
              width: "35%",
              textAlign: "center",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            MarketPlace
          </Tab>
          <Tab
            style={{
              width: "35%",
              textAlign: "center",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            Your NFTs
          </Tab>
        </TabList>
        <TabPanel>
          <div style={{ position: "absolute", width: "100%" }}>
            <Marketplace />
          </div>
        </TabPanel>
        <TabPanel>
          <div style={{ position: "absolute", width: "100%" }}>
            <Mynft />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Market;
