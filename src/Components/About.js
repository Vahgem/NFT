import React, { Component } from "react";
import Fade from "react-reveal";
import pic from "./slider-pic1.png";
class About extends Component {
  render() {
    //const name = this.props.data.name;
    const bio =
      "We are a young company who wants to promote and build a platform to encourge the trade of NFTs of cricket and films. We recognise that these two things are really important and we would love to own these moments. And since these moments will have limited copies they become rather valuable.";
    const street = "Faridabad";
    const city = "Haryana";
    const state = "India";
    const zip = "121006";
    const phone = "+917015571891";
    const email = "admin@Birthvenue.in";
    //const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={pic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Us</h2>

              <p>{bio}</p>
              <div
                className="columns contact-details"
                style={{ marginLeft: "30%" }}
              >
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
        </Fade>
      </section>
    );
  }
}

export default About;
