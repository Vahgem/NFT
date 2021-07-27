import React, { useState, useEffect } from "react";
import "./form.css";
import web3 from "../Ethereum/web3";
import nft from "../Ethereum/nft";

const { create } = require("ipfs-http-client");
const ipfs = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

const Form = () => {
  const [NFT, setNFT] = useState({
    name: "",
    image_url: "",
    description: "",
    type: "",
  });

  const [selectedFile, setSelectedFile] = useState("");

  const CaptureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    console.log(file);

    if (file.type.includes("image")) setNFT({ ...NFT, type: "image" });
    else setNFT({ ...NFT, type: "video" });

    let reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    setSelectedFile(file);
  };

  const setNFTimage = async (event) => {
    event.preventDefault();
    const ipfsHash = await ipfs.add(selectedFile);
    console.log(ipfsHash.path);
    setNFT({
      ...NFT,
      image_url: `https://ipfs.io/ipfs/${ipfsHash.path}`,
    });
  };

  const submitForm = async () => {
    try {
      const finalHash = await ipfs.add(JSON.stringify(NFT));
      console.log(finalHash.path, NFT);
      const accounts = await web3.eth.getAccounts();
      await nft.methods
        .createNFT(accounts[0], `https://ipfs.io/ipfs/${finalHash.path}`)
        .send({ from: accounts[0] });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (NFT.image_url.length > 0) submitForm(); //eslint-disable-next-line
  }, [NFT.image_url]);

  return (
    <div >
      <form className="Form">
        <label>NFT Name</label>
        <input
          type="name"
          value={NFT.name}
          name="name"
          style={{ fontSize: "12px" }}
          onChange={(e) => setNFT({ ...NFT, name: e.target.value })}
          //required
        />
        <label>Upload Your NFT Data</label>
        <input type="file" onChange={CaptureFile} />
        <label>Description of NFT</label>
        <input
          type="text"
          value={NFT.description}
          name="description"
          style={{ fontSize: "13px" }}
          onChange={(e) => setNFT({ ...NFT, description: e.target.value })}
          //required
        />

        <button
          onClick={setNFTimage}
          style={{ marginLeft: "6rem", width: "40%" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
