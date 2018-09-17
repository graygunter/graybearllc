import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Projects from './Projects';

class HomeScreen extends Component {

  render() {
    return (

      <div className="homeScreen">

        <div className="logo-and-arrow-container">

          <img 
              alt="Graybear LLC. Since 2011"
              className="logo"
              src={require(`../imgs/graybear_logo.svg`)} />

          <div className="arrow-container">

            <FontAwesomeIcon 
                              icon="arrow-alt-circle-down" 
                              size="5x"/>

          </div>

        </div>

        <Projects projectsData={this.props.projectsData}/>

      </div>

    );
  }
}

export default HomeScreen;
