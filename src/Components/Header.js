import React,{useState} from "react";
import ParticlesBg from "particles-bg";
import {Fade} from "react-reveal";


    const project = "https://vahgem.github.io/marketplace/";
    const github = "https://github.com/Vahgem/Homepage";
   
    const description = "Filmstars and cricketers have always been connected, we can see multiple cricketers and filmstars meeting and even go as far as to date.";


    
export default function Header() {
  const [curr, setCurr] = useState("home");
      return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className={curr==="home"?"current":"nonactive"}>
              <a className="smoothscroll" href="#home" onClick={()=>setCurr("home")}>
                Home
              </a>
            </li>

            <li className={curr==="about"?"current":"nonactive"}>
              <a className="smoothscroll" href="#about" onClick={() => setCurr("about" )}>
                About
              </a>
            </li>

            
            <li className={curr==="works"?"current":"nonactive"}>
              <a className="smoothscroll" href="#Howto" onClick={() => setCurr("works")}>
                Works
              </a>
            </li>

            <li className={curr==="faq"?"current":"nonactive"}>
              <a className="smoothscroll" href="#faq" onClick={() => setCurr("faq")}>
                FAQs
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
            <hr style={{ border:"1px solid black"}} />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn" style={{fontSize:"20px"}}>
                  <i className="fa fa-book" ></i>MarketPlace
                </a>
                <a href={github} className="button btn github-btn" style={{fontSize:"20px"}}>
                  <i className="fa fa-github"></i>Github
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
  }

