import React, { Component } from "react";

class ImageAbout extends Component {
  render() {
    return <img src={this.props.src} alt="" className="img-about" />;
  }
}

export default ImageAbout;
