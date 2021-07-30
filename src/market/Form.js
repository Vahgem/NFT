import React, { useState, useEffect } from "react";
import "./form.css";
import web3 from "../Ethereum/web3";
import nft from "../Ethereum/nft";
import Popup from "reactjs-popup";
require("dotenv").config();

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
    type: "image/jpg",
  });
  const [isOpen, setIsOpen] = useState(false);
  console.log(NFT);

  const [selectedFile, setSelectedFile] = useState("");

  const CaptureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    console.log(file);
    let reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    setSelectedFile(file);
  };

  const setNFTimage = async (event) => {
    setIsOpen(false);
    event.preventDefault();
    const ipfsHash = await ipfs.add(selectedFile);
    console.log(ipfsHash.path);
    setNFT({
      ...NFT,
      image_url: `https://ipfs.io/ipfs/${ipfsHash.path}`,
    });
  };

  const submitForm = async () => {
    setIsOpen(false);
    console.log(NFT);
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
    <Popup trigger={<button
      onClick={() => setIsOpen(true)}
      open={isOpen}
      className="button"> Create Your NFT </button>} modal>
    <div>
      <form className="Form">
        <label style={{ color: "white", fontWeight: "700", fontSize: "18px" }}>
          NFT Name
        </label>
        <input
          type="name"
          value={NFT.name}
          name="name"
          style={{ fontSize: "12px" }}
          onChange={(e) => setNFT({ ...NFT, name: e.target.value })}
          required
        />
        <label style={{ color: "white", fontWeight: "700", fontSize: "18px" }}>
          Upload Your NFT Data
        </label>
        <div className="custom-file-upload">
          <input type="file" onChange={CaptureFile} required />{" "}
        </div>
        <label style={{ color: "white", fontWeight: "700", fontSize: "18px" }}>
          Description of NFT
        </label>
        <input
          type="text"
          maxLength="80"
          value={NFT.description}
          name="description"
          style={{ fontSize: "13px" }}
          onChange={(e) => setNFT({ ...NFT, description: e.target.value })}
          required
        />

        <label style={{ color: "white", fontWeight: "700", fontSize: "18px" }}>
          Select File Type
        </label>
        <select
          style={{ color: "black", fontSize: "14px", height: "auto" }}
          value={NFT.type}
          onChange={(e) => setNFT({ ...NFT, type: e.target.value })}
        >
          <option value="image/jpg">Image/Gifs</option>
          <option value="video/webm">Video</option>
        </select>
        <br />
        <button
          onClick={setNFTimage}
          style={{ marginLeft: "6rem", width: "40%" }}
        >
          Submit
        </button>
      </form>
      </div>
      </Popup>
  );
};
export default Form;
