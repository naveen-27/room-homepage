import React, { Component } from "react";
import img0 from "./images/desktop-image-hero-1.jpg";
import img1 from "./images/desktop-image-hero-2.jpg";
import img2 from "./images/desktop-image-hero-3.jpg";
import left from "./images/icon-angle-left.svg";
import right from "./images/icon-angle-right.svg";

class Carousel extends Component {
  constructor(props) {
    super();
    this.state = {
      image: 0,
    };
    this.images = [img0, img1, img2];
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(e) {
    if (e.target.id === "nxt") {
      this.setState({ image: (this.state.image + 1) % 3 });
    } else {
      if (this.state.image === 0) {
        this.setState({ image: 2 });
      } else {
        this.setState({ image: this.state.image - 1 });
      }
    }
  }

  render() {
    return (
      <div className="Carousel">
        <img src={this.images[this.state.image]} alt="" />
        <div className="btn">
          <button id="prev" onClick={this.changeImage}>
            <img src={left} alt="" />
          </button>
          <button id="nxt" onClick={this.changeImage}>
            <img src={right} alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
