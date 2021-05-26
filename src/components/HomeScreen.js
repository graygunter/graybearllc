import React, { Component } from 'react';

import Menu from './Menu';
import Projects from './Projects';

class HomeScreen extends Component {

  render() {
    return (

      <div className={this.props.showHide}>
        <div className="homeScreen">

          <img
              alt="Graybear LLC. Since 2011"
              className="logo"
              src={require(`../imgs/graybear_logo.svg`)} />

          <Menu
                isUXUI={this.props.isUXUI}
                menuPressed={this.props.menuPressed}/>

          <Projects isUXUI={this.props.isUXUI}
                    projectsData={this.props.projectsData}/>

        </div>
      </div>

    );
  }
}

export default HomeScreen;
