import React, { Component } from "react";

import Menu from "./Menu";
import Projects from "./Projects";

class HomeScreen extends Component {
  render() {
    return (
      <div className={this.props.showHide}>
        <div className="homeScreen">
          <img
            alt="Graybear LLC. Since 2011"
            className="logo"
            src={require(`../imgs/graybear_logo.svg`)}
          />

          <Menu
            isDevDesign={this.props.isDevDesign}
            isUXUI={this.props.isUXUI}
            isArt={this.props.isArt}
            menuPressed={this.props.menuPressed}
          />

          <Projects
            isDevDesign={this.props.isDevDesign}
            isUXUI={this.props.isUXUI}
            isArt={this.props.isArt}
            projectsData={this.props.projectsData}
          />
        </div>
      </div>
    );
  }
}

export default HomeScreen;
