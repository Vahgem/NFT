import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: <div style={{ fontWeight: "700" }}>What is NFT ?</div>,
      content: (
        <div style={{ textAlign: "left" }}>
          Non-Fungible Tokens are unique, easily verifiable digital assets that
          can represent items such as GIFs, images, videos, music albums, and
          more.
        </div>
      ),
    },
    {
      title: (
        <div style={{ fontWeight: "700" }}>
          How is an NFT different from Cryptocurrency ?
        </div>
      ),
      content: (
        <div style={{ textAlign: "left" }}>
          Physical money and cryptocurrencies are fungible, meaning they can be
          traded or exchanged for one another. They are also equal in value.
          NFTs are different. Each has a digital signature that makes it
          impossible for NFTs to be exchanged for or equal to one another.
        </div>
      ),
    },
    {
      title: <div style={{ fontWeight: "700" }}>How to trade NFTs ?</div>,
      content: (
        <div style={{ textAlign: "left" }}>
          To trade NFTs one must have a Crypto Wallet for the execution of such
          transactions.
          <br />
          Currently only Metamask is supported.
          <br />
          One must have a Chrome extension as well as a mobile equivalent of
          Metamask.{" "}
        </div>
      ),
    },
    {
      title: (
        <div style={{ fontWeight: "700" }}>
          How to install Metamask Chrome Extension ?
        </div>
      ),
      content: (
        <div style={{ textAlign: "left" }}>
          {" "}
          Go to MetaMask.io and select from Android or iOS for mobile
          application and select Chrome for desktop.
          <br />
          You can also go directly to the Chrome store, Google Play store, or
          Apple App Store (soon).{" "}
        </div>
      ),
    },
    {
      title: (
        <div style={{ fontWeight: "700" }}>
          How to use same Chrome extension account within Metamask Mobile App ?
        </div>
      ),
      content: (
        <div style={{ textAlign: "left" }}>
          {" "}
          You can sync your MetaMask extension wallet with mobile by using the
          MetaMask Mobile Sync feature.
          <br />
          1.Install MetaMask mobile at MetaMask.io.
          <br />
          2.Open the MetaMask mobile app and select ‘Sync or Import’ {">"} ‘Scan
          QR code’.
          <br />
          3.Log into your MetaMask extension
          <br />
          4.Click Settings {">"} Advanced {">"} Sync with Mobile. You’ll see a
          QR code.
          <br />
          5.Scan this QR code with your MetaMask mobile app.
          <br />
        </div>
      ),
    },
    {
      title: (
        <div style={{ fontWeight: "700" }}>
        How to acquire testnet currency ?
        </div>
      ),
      content: (
        <div style={{ textAlign: "left" }}>
         <a href="https://faucet.rinkeby.io/">https://faucet.rinkeby.io/</a>
        </div>
      ),
    },

    {
      title: (
        <div style={{ fontWeight: "600" }}>
          What Networks are currently supported ?
        </div>
      ),
      content: (
        <div style={{ textAlign: "left" }}>
          Currently accounts only within Rinkeby Testnet are supported on the
          Ethereum Platform.{" "}
        </div>
      ),
    },
  ],
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};
const style = {
  bgColor: "#0A1931",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "white",
  rowContentTextSize: "17px",
  arrowColor: "white",
  fontSize: "15px",
  padding: "15px",
  margin: "15px",
};
export default function Faqs() {
  return (
    <section id="faq" style={{width:"100vw",}}>
      <Faq data={data} styles={style} config={config} />
    </section>
  );
}
