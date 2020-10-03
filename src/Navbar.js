import React, { Component } from "react";
import logo from "./images/logo.svg";
import menu from "./images/icon-hamburger.svg";
import close from "./images/icon-close.svg";

class Navbar extends Component {
  close() {
    document.querySelector("nav").style.display = "none";
  }

  open() {
    document.querySelector("nav").style.display = "block";
  }

  render() {
    if (window.innerWidth > "800") {
      return (
        <header>
          <div className="Logo">
            <img src={logo} alt="Room" />
          </div>
          <nav>
            <ul className="nav-links">
              <li className="nav-link">home</li>
              <li className="nav-link">shop</li>
              <li className="nav-link">about</li>
              <li className="nav-link">contact</li>
            </ul>
          </nav>
        </header>
      );
    } else {
      return (
        <header>
          <img src={logo} alt="Room" />
          <img src={menu} alt="ham-menu" onClick={this.open} />
          <nav style={{ display: "none" }}>
            <ul className="nav-links">
              <li className="nav-link">home</li>
              <li className="nav-link">shop</li>
              <li className="nav-link">about</li>
              <li className="nav-link">contact</li>
              <li className="nav-link" onClick={this.close}>
                <img src={close} alt="close" />
              </li>
            </ul>
          </nav>
        </header>
      );
    }
  }
}

export default Navbar;
