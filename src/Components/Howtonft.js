import React from 'react';
import './howto.css';
export default function Howtonft() {
    return (
        <section id="Howto" style={{ backgroundColor: 'yellow', padding: "20px" }}>
            <h1 style={{ textAlign: 'center' }}>Create and sell your NFT</h1>
            <br />
            
            <ul className="Howto" >
                <li>
                    <i className="fa fa-suitcase fa-2x" ></i>
                    <h3>Set up your wallet</h3>
                    <p >Once you have set up your wallet of choice, connect it by clicking the wallet icon in the right corner.</p>
                </li>
                <li>
                    <i className="fa fa-book fa-2x"   ></i>
                    <h3>Create your collection</h3>
                    <p>Click Create and set up your collections. Add social links, a description profile and banner images and set a secondary sales fee.</p>
                </li>
                <li>
                    <i className="fa fa-picture-o fa-2x" ></i>
                    <h3>Buy your NFTs</h3>
                    <p>Choose bet ween auctioncs, fixed price listings and declining-price listings. You choose how you want to sell your NFTs and we help you sell them! </p>
                </li>
            </ul>
        </section>
    )
}
