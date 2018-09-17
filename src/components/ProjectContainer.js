import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Nav extends Component {

  render() {

    return (
      <ScrollAnimation  animateIn={"fadeIn"} 
                        animateOnce={true} 
                        className="project-container">
        <h3>

            {this.props.projectLink ? (

              <a href={this.props.projectLink} target="_blank">{this.props.projectName}</a>

              ) : (

              <a href={"https://vimeo.com/" + this.props.vimeoID} target="_blank">{this.props.projectName}</a>

              )

            }
        </h3>

        <iframe 
                allowFullScreen
                frameBorder="0"
                mozallowfullscreen="true"
                src={"http://player.vimeo.com/video/" + this.props.vimeoID + "?title=0&amp;byline=0&amp;portrait=0"}
                title={this.props.id}
                webkitallowfullscreen="true"></iframe>

        {
          this.props.clientName ? (

            this.props.clientLink ? (

              <h4>Client:&nbsp;
                <a href={this.props.clientLink} target="_blank">{this.props.clientName}</a>
              </h4>

            ) : (

              <h4>Client:&nbsp;{this.props.clientName}</h4>

            )

          ) : null
        }
        {
          this.props.agencyName ? (

            this.props.agencyLink ? (

              <h4>Agency:&nbsp;
                <a href={this.props.agencyLink} target="_blank">
                   {this.props.agencyName}
                </a>
              </h4>

            ) : (

              <h4>Agency:&nbsp;{this.props.agencyName}</h4>

            )

          ) : null
        }

        <p>
          {this.props.description}
        </p>
      </ScrollAnimation>
    );
  }
}

export default Nav;
