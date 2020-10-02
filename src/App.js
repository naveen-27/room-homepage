import React, { Component } from "react";
import ImageAbout from "./ImageAbout";
import About from "./About";
import aboutLight from "./images/image-about-light.jpg";
import aboutDark from "./images/image-about-dark.jpg";

class App extends Component {
  render() {
    return (
      <div className="Row-2">
        <ImageAbout src={aboutLight} />
        <About />
        <ImageAbout src={aboutDark} />
      </div>
    );
  }
}

export default App;
