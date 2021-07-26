import React,{useState} from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import "./Card.css";
import Popup from "reactjs-popup";
const opensea = require("opensea-js");
const provider = new WalletConnectProvider({
  infuraId: "3610b5ef9a864d4dbd6ec3fc0e186935",
});
const OpenSeaPort = opensea.OpenSeaPort;
const Network = opensea.Network;

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Rinkeby,
});

const Mynftcard = ({ nft }) => {
  console.log(nft);
  const Sell = async () => {
    
    
    console.log("sell");
    try {
      await provider.enable();
      const web3 = new Web3(provider);
      const accountAddress = await web3.eth.getAccounts();
      const expirationTime = Math.round(Date.now() / 1000 + 60 * 60 * 24);
      const listing = await seaport.createSellOrder({
        asset: {
          tokenId: nft.token_id,
          tokenAddress: "0xB6532f3a7CCB26c119D6f3fAccaF6Dd5bf4B5ff2",
        },
        accountAddress: accountAddress[0],
        startAmount: 3,
        endAmount: 3,
        expirationTime,
      });
      console.log(listing);
      await provider.disconnect();
    } catch (e) {
      await provider.disconnect();

      window.location.reload();
      if (e.message !== "User closed modal") alert(e.message);
    }
  };
  
  const [days, setDays] = useState("0");
    const [price, setPrice] = useState("0.00");
  return (
    <div>
      <div className="cards_items">
        <embed type="image/jpg" src={nft.image_url} alt={nft.name} style={{objectFit: "contain",overflow:"hidden",width: "100%",
height: "150px"}}/>
        <div className="desc">
          <div className="titles">
            <div className="name">{nft.name}</div>
            <div className="code">{nft.description}</div>
          </div>

          {/* <div className="price">
              <div className="pn">Price</div>
              <div className="pval">
                {nft.sell_orders &&
                  parseInt(nft.sell_orders[0].base_price, 10) /
                    Math.pow(10, 18)}
              </div>
            </div> */}
        </div>
        <br />
        <Popup trigger={<button className="button" style={{borderRadius:"10px",marginLeft:"4em"}}> Sell</button>} modal>
        <form style={{
  backgroundColor:"antiquewhite",padding: "15px", border:"2px solid #333",
}}
          >
             <label>Price</label> 
            <input type="number" value={price} onChange={(e)=>setPrice(e.value)} required />
            <label>Duration of selling period</label> 
            <input type="number" value={days} onChange={(e) => setDays(e.value)} required />
            <br/>
            <input type="submit" onClick={()=>Sell}/>
    </form>    )
  </Popup>
      </div>
    </div>
  );
};

export default Mynftcard;
