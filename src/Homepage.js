import React, { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Howtonft from "./Components/Howtonft";
import Faqs from "./Components/Faq";
import { connect } from "react-redux";
import { setcurrentuser } from "./redux/user/user-actions";

const Homepage = ({ setcurrentuser }) => {
  useEffect(() => {
    window.onunload = () => {
      setcurrentuser({ accountAddress: "", ethId: "" });
    }; //eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Header />
      <About />
      <Howtonft />
      <Faqs />
      <Footer />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setcurrentuser: (user) => dispatch(setcurrentuser(user)),
});
export default connect(null, mapDispatchToProps)(Homepage);
