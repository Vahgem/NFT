import React from "react";
import "./market.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Mynft from "./market/Mynft";
import "react-tabs/style/react-tabs.css";
import Popup from "./market/Popup.js";
import Marketplace from "./market/Marketplace.js";
function Market() {
  return (
    <div className="App">
      <Popup />
      <Tabs defaultIndex={1}>
        <TabList>
          <Tab style={{ width: "35%", textAlign: "center" }}>MarketPlace</Tab>
          <Tab style={{ width: "35%", textAlign: "center" }}>Your NFTs</Tab>
        </TabList>
        <TabPanel>
          <div>
            <Marketplace />
          </div>
        </TabPanel>
        <TabPanel>
          <h2>
            <Mynft />
          </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Market;
