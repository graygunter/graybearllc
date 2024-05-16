import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

const folder = "uxui";

class UXUIContainer extends Component {
  render() {
    return (
      <ScrollAnimation
        animateIn={"fadeIn"}
        animateOnce={true}
        className="project-container"
      >
        <div
          onClick={() =>
            this.props.slideShowClicked(
              this.props.slides,
              this.props.longDescription
            )
          }
        >
          <h3>{this.props.name}</h3>

          <img
            alt={this.props.altText}
            className={"thumbnail"}
            src={require(`../imgs/thumbnails/${folder}/${this.props.thumbnail}`)}
          />

          <p>{this.props.briefDescription}</p>
        </div>
      </ScrollAnimation>
    );
  }
}

export default UXUIContainer;
