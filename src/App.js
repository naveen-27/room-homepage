import React, { Component } from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import CallToAction from "./CallToAction";
import ImageAbout from "./ImageAbout";
import About from "./About";
import aboutLight from "./images/image-about-light.jpg";
import aboutDark from "./images/image-about-dark.jpg";
import "./stylesheets/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel />
        <CallToAction />
        <ImageAbout src={aboutDark} />
        <About />
        <ImageAbout src={aboutLight} />
      </div>
    );
  }
}

export default App;
