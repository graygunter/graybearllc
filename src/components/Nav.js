import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import socialData from '../json/social.json';

class Nav extends Component {

  generateSocialMedia() {

    let socialIcons = []

    for(let i = 0; i < socialData["social"].length; i++) {

      var siteName = socialData["social"][i]["site"];
      var userName = socialData["social"][i]["username"];

      let newSocialIcon = (

        <a  
            href={"https://www." + siteName + ".com/" + userName}
            id={siteName}
            key={"socialIcon-" + i}
            target="_blank">

              <FontAwesomeIcon 
                                icon={["fab", siteName]}
                                size="3x" />

        </a>

      );

      socialIcons.push(newSocialIcon);

    }

    return socialIcons;

  }

  render() {
    return (
      <nav>

        <button
                onClick={this.props.buttonPressed}>
          <FontAwesomeIcon 
                            icon={this.props.isHome ? "envelope" : "home"} 
                            size="3x"/>
        </button>

        {this.generateSocialMedia()}

      </nav>
    );
  }
}

export default Nav;
