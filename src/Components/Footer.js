import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
  

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">

              <li key="Facebook">
          <a href="#https://www.facebook.com">
            <i className="fa fa-facebook fa-2x"></i>
          </a>
                </li>
                
                
              <li key="Twitter">
          <a href="#https://www.twitter.com">
            <i className="fa fa-twitter fa-2x"></i>
          </a>
                </li>
                
                

                <li key="Linkedin">
          <a href="#https://www.linkedin.com">
            <i className="fa fa-linkedin fa-2x"></i>
          </a>
                </li>
                
                

              </ul>

             
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
