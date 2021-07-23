import React from 'react'
import Faq from "react-faq-component";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "What is NFT ?",
            content: `Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs,
             images, videos, music albums, and more.`,
        },
        {
            title: "How is an NFT different from Cryptocurrency?",
            content:
                `Physical money and cryptocurrencies are fungible, meaning they can be traded or exchanged for one another.
                They are also equal in value. NFTs are different.
                Each has a digital signature that makes it impossible for NFTs to be exchanged for or equal to one another.`,
        },
        {
            title: "How to trade NFTs ?",
            content: `To trade NFTs one must have a Crypto Wallet for the execution of such transactions.
            Currently only Metamask is supported.
            One must have a Chrome extension as well as a mobile equivalent of Metamask. `,
        },
        {
            title: "How to install Metamask Chrome Extension ? ",
            content: `Go to MetaMask.io and select from Android or iOS for mobile application and select Chrome for desktop.
            You can also go directly to the Chrome store, Google Play store, or Apple App Store (soon). `,
        },
        {
            title: "How to use same Chrome extension account within Metamask Mobile App ?",
            content: `You can sync your MetaMask extension wallet with mobile by using the MetaMask Mobile Sync feature.
            1.Install MetaMask mobile at MetaMask.io.
            2.Open the MetaMask mobile app and select ‘Sync or Import’ > ‘Scan QR code’.
            3.Log into your MetaMask extension
            4.Click Settings > Advanced > Sync with Mobile. You’ll see a QR code.
            5.Scan this QR code with your MetaMask mobile app.`,
        },
        
        {
            title: "What Networks are currently supported ?",
            content: `Currently accounts only within Rinkeby Testnet are supported on the Ethereum Platform. `,
        },
    ],
};



const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "grey",
    // rowContentColor: 'grey',
    // arrowColor: "red",
    fontSize: "12px",
    padding: "15px",
    margin:"15px",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};



export default function Faqs() {
    return (
        <section id="faq">
             <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </section>
    )
}
