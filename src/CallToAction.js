import React, { Component } from "react";
import next from "./images/icon-arrow.svg";

class CallToAction extends Component {
  render() {
    return (
      <div className="cta">
        <h1 className="cta-head">Discover innovative ways to decorate</h1>
        <p className="text-muted">
          We provide unmatched quality, comfort and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to lifr. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <button className="cta-btn">
          SHOP NOW
          <img src={next} alt="" />
        </button>
      </div>
    );
  }
}

export default CallToAction;
