import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {

    //const name = this.props.data.name;
    const profilepic = "images/";
    const bio = "We are a young company who wants to promote and build a platform to encourge the trade of NFTs of cricket and films. We recognise that these two things are really important and we would love to own these moments. And since these moments will have limited copies they become rather valuable.";
    const street = "MLK street";
    const city = "Houston";
    const state = "Texas";
    const zip = "545212";
    const phone = "011991911";
    const email = "birthvenue@gmail.com";
    //const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Us</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>BirthVenue</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
