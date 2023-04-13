// importing imp dependencies
import React from "react";
import "./Header.css";

// headercomponent
class Header extends React.Component {
  render() {
    
    return (
      <div className="main">
        <div className="header">
          <img id="abcproduct" src={require("./images/abcproduct.jpg")} />
         
        </div>
        <h3 id="invoicehead">Invoice List</h3>

        
      </div>
    );
  }
}
export default Header;
