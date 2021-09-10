import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faEnvelope, faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import Nav from './Nav';
import HomeScreen from './HomeScreen';
import ContactScreen from './ContactScreen';

import projectsData from '../json/projects.json';
import uxuiData from '../json/uxui.json';

class App extends Component {

  constructor() {

    library.add(faHome, faEnvelope, faArrowAltCircleDown, faTwitter, faInstagram, faLinkedin);

    super();

    this.contactPressed = this.contactPressed.bind(this);
    this.menuPressed = this.menuPressed.bind(this);

    this.state = {

      isHome: true,
      isUXUI: true

    }

  }

  contactPressed() {

    this.state.isHome ? this.setState({isHome: false}) : this.setState({isHome: true});

  }

  menuPressed() {

    this.state.isUXUI ? this.setState({isUXUI: false}) : this.setState({isUXUI: true});

  }

  render() {
    return (
      <div className="container">

        <header>

          <Nav
              className="headerNav"
              contactPressed={this.contactPressed}
              isHome={this.state.isHome}/>

        </header>

        <HomeScreen
                    isUXUI={this.state.isUXUI ? true : false}
                    menuPressed={this.menuPressed}
                    projectsData={this.state.isUXUI ? uxuiData["uxui"] : projectsData["projects"]}
                    showHide={this.state.isHome ? "show" : "hide"}/>

        <ContactScreen showHide={this.state.isHome ? "hide" : "show"} />

        <ScrollAnimation
                          animateIn="fadeIn"
                          animateOnce={true}
                          className="footer"
                          offset={0}>
            Copyright &copy; Graybear LLC {new Date().getFullYear()}
        </ScrollAnimation>

      </div>
    );
  }

}

export default App;
