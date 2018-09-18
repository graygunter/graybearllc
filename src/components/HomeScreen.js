import React, { Component } from 'react';

import Projects from './Projects';

class HomeScreen extends Component {

  render() {
    return (

      <div className="homeScreen">

        <img 
            alt="Graybear LLC. Since 2011"
            className="logo"
            src={require(`../imgs/graybear_logo.svg`)} />

        <Projects projectsData={this.props.projectsData}/>

      </div>

    );
  }
}

export default HomeScreen;
