import React from "react";
import Popup from "reactjs-popup";
import Form from "./Form.js";
const Modal = () => (
  <Popup trigger={<button className="button"> Upload File </button>} modal>
    <Form />
  </Popup>
);
export default Modal;
