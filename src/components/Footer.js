import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="foot">
          <a href="/" className="policy">
            Privacy Policy
          </a>
          &nbsp;&nbsp;&nbsp;| ©️ 2022 ABC Corporation. All rights
          reserved.
        </div>
      </div>
    );
  }
}
