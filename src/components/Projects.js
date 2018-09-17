import React, { Component } from 'react';
import ProjectContainer from './ProjectContainer';

class Projects extends Component {

  constructor() {

    super();

    this.generateProjects = this.generateProjects.bind(this);
    this.shuffle = this.shuffle.bind(this);

  }


  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  generateProjects() {

    var projects = [];

    var projectsDataArray = this.props.projectsData;

    projectsDataArray = this.shuffle(projectsDataArray)

    for(let i = 0; i < projectsDataArray.length; i++) {

      let agencyLink = projectsDataArray[i]["agency-link"];
      let agencyName = projectsDataArray[i]["agency-name"];

      let clientLink = projectsDataArray[i]["client-link"];
      let clientName = projectsDataArray[i]["client-name"];

      let description = projectsDataArray[i]["description"];

      let projectLink = projectsDataArray[i]["project-link"];
      let projectName = projectsDataArray[i]["project-name"];

      let vimeoID = projectsDataArray[i]["vimeo-id"];

      let newProject = (

        <ProjectContainer
                          agencyLink={agencyLink}
                          agencyName={agencyName}
                          clientLink={clientLink}
                          clientName={clientName}
                          description={description}
                          id={i}
                          key={"project-container" + i}
                          projectLink={projectLink}
                          projectName={projectName}
                          vimeoID={vimeoID}/>
      );

      projects.push(newProject);

    }

    return projects;

  }

  render() {
    return (
      <div className="projects">

        {this.generateProjects()}

      </div>
    );
  }
}

export default Projects;
