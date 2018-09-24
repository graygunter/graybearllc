import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faEnvelope, faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import Nav from './Nav';
import HomeScreen from './HomeScreen';
import ContactScreen from './ContactScreen';

import projectsData from '../json/projects.json';

class App extends Component {

  constructor() {

    library.add(faHome, faEnvelope, faArrowAltCircleDown, faTwitter, faInstagram, faLinkedin);

    super();

    this.buttonPressed = this.buttonPressed.bind(this);

    this.state = {

      isHome: true,

    }

  }

  buttonPressed() {

    if(this.state.isHome) {

      this.setState({isHome: false})

    }
    else {

      this.setState({isHome: true})

    }

  }

  render() {
    return (
      <div className="container">
        
        <header>

          <Nav 
              buttonPressed={this.buttonPressed}
              className="headerNav" 
              isHome={this.state.isHome}/>

        </header>

        <HomeScreen showHide={this.state.isHome ? "show" : "hide"}
                    projectsData={projectsData["projects"]} />

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
