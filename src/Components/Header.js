import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import web3 from "../Ethereum/web3";
import { connect } from "react-redux";
import { setcurrentuser } from "../redux/user/user-actions";
import { useAlert } from "react-alert";

const project = "./market";

const description =
  "The relationship between Bollywood and cricket goes a long way, celebs form both the industries have made headlines together. Many movies have been made about the sport and biopics on legendary stars are also in the pipeline.";

const Header = ({ setcurrentuser, accountAddress }) => {
  const [curr, setCurr] = useState("home");
  const alert = useAlert();
  const SetWalletAddress = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
      setCurr("connect");
    }
    var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) {
      alert.error("Please use Desktop mode on mobile");
    }
    const accounts = await web3.eth.getAccounts();
    const ethId = await web3.eth.net.getId();
    if (ethId !== 4) {
      alert.show("Select Rinkeby Network");
    } else if (accounts[0] !== accountAddress) {
      setcurrentuser({ accountAddress: accounts[0], ethId });
      alert.success("Wallet Connected");
    }
    console.log(accounts, ethId);
  };
  // useEffect(() => {
  //   SetWalletAddress();
  // }, []);
  return (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

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
          <li className={curr === "home" ? "current" : "nonactive"}>
            <a
              className="smoothscroll"
              href="#home"
              onClick={() => setCurr("home")}
            >
              Home
            </a>
          </li>

          <li className={curr === "about" ? "current" : "nonactive"}>
            <a
              className="smoothscroll"
              href="#about"
              onClick={() => setCurr("about")}
            >
              About
            </a>
          </li>

          <li className={curr === "works" ? "current" : "nonactive"}>
            <a
              className="smoothscroll"
              href="#Howto"
              onClick={() => setCurr("works")}
            >
              Works
            </a>
          </li>

          <li className={curr === "faq" ? "current" : "nonactive"}>
            <a
              className="smoothscroll"
              href="#faq"
              onClick={() => setCurr("faq")}
            >
              FAQs
            </a>
          </li>
          <li className={curr === "connect" ? "current" : "nonactive"}>
            <a
              className="smoothscroll"
              href="/#"
              onClick={SetWalletAddress}
              style={{ cursor: "pointer" }}
            >
              Connect Wallet
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom>
            <h1 className="responsive-headline">FCUC</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h3>{description}</h3>
          </Fade>
          <hr style={{ border: "1px solid white" }} />
          <Fade bottom duration={2000}>
            <ul className="social">
              <a
                href={project}
                className="button btn project-btn"
                style={{ marginLeft: "5rem" }}
              >
                <i className="fa fa-book"></i>MarketPlace
              </a>
            </ul>
          </Fade>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};
const mapStateToProps = ({ user }) => ({
  accountAddress: user.accountAddress,
});
const mapDispatchToProps = (dispatch) => ({
  setcurrentuser: (user) => dispatch(setcurrentuser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
