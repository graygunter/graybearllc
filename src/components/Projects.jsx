import React, { Component } from "react";
import ProjectContainer from "./ProjectContainer";
import UXUIContainer from "./UXUIContainer";
import UXUISlide from "./UXUISlide";

var Carousel = require("react-responsive-carousel").Carousel;

class Projects extends Component {
  constructor() {
    super();

    this.generateProjects = this.generateProjects.bind(this);
    this.generateSlideShow = this.generateSlideShow.bind(this);
    this.generateUXUIProjects = this.generateUXUIProjects.bind(this);
    this.generateWebDevProjects = this.generateWebDevProjects.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.slideShowClicked = this.slideShowClicked.bind(this);
    this.slideShowClosed = this.slideShowClosed.bind(this);

    this.state = {
      showSlideShow: false,
      slideLongDescription: "",
      slideNames: [],
    };
  }

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  generateWebDevProjects(projects, projectsDataArray) {
    for (let i = 0; i < projectsDataArray.length; i++) {
      let agencyLink = projectsDataArray[i]["agency-link"];
      let agencyName = projectsDataArray[i]["agency-name"];

      let clientLink = projectsDataArray[i]["client-link"];
      let clientName = projectsDataArray[i]["client-name"];

      let description = projectsDataArray[i]["description"];

      let projectLink = projectsDataArray[i]["project-link"];
      let projectName = projectsDataArray[i]["project-name"];

      let role = projectsDataArray[i]["role"];

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
          role={role}
          vimeoID={vimeoID}
        />
      );

      projects.push(newProject);
    }

    return projects;
  }

  slideShowClicked(e, longDescription) {
    this.setState({ slideNames: e });
    this.setState({ slideLongDescription: longDescription });
    this.setState({ showSlideShow: true });
  }

  slideShowClosed() {
    this.setState({ slideNames: [] });
    this.setState({ slideLongDescription: "" });
    this.setState({ showSlideShow: false });
  }

  generateSlideShow(slides, projectsDataArray) {
    let slideNames = this.state.slideNames;

    for (let i = 0; i < slideNames.length; i++) {
      let newSlide = (
        <UXUISlide
          img={slideNames[i]}
          key={"slide" + i}
          longDescription={this.state.slideLongDescription}
          slideShowClosed={this.slideShowClosed}
        />
      );

      slides.push(newSlide);
    }

    let slideCarousel = (
      <div className={"carouselWrapper"}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={true}
          transitionTime={1}
        >
          {slides}
        </Carousel>
      </div>
    );

    return slideCarousel;
  }

  generateUXUIProjects(projects, projectsDataArray) {
    for (let i = 0; i < projectsDataArray.length; i++) {
      let uxuiAltText = projectsDataArray[i]["altText"];
      let uxuiBriefDescription = projectsDataArray[i]["briefDescription"];
      let uxuiLongDescription = projectsDataArray[i]["longDescription"];
      let uxuiName = projectsDataArray[i]["name"];
      let uxuiSlides = projectsDataArray[i]["slides"];
      let uxuiThumbnail = projectsDataArray[i]["thumbnail"];

      let newProject = (
        <UXUIContainer
          altText={uxuiAltText}
          briefDescription={uxuiBriefDescription}
          id={i}
          key={"uxui-container" + i}
          longDescription={uxuiLongDescription}
          name={uxuiName}
          slides={uxuiSlides}
          slideShowClicked={this.slideShowClicked}
          thumbnail={uxuiThumbnail}
        />
      );

      projects.push(newProject);
    }

    return projects;
  }

  generateProjects() {
    var projects = [];

    var projectsDataArray = this.props.projectsData;

    if (!this.props.isUXUI) projectsDataArray = this.shuffle(projectsDataArray);

    if (this.props.isUXUI) {
      this.generateUXUIProjects(projects, projectsDataArray);
    } else {
      this.generateWebDevProjects(projects, projectsDataArray);
    }

    return projects;
  }

  render() {
    return (
      <div className="projects">
        {this.generateProjects()}

        <div className="slideshow-container">
          {this.slideShowClicked
            ? this.generateSlideShow([], this.props.projectsData)
            : null}
        </div>
      </div>
    );
  }
}

export default Projects;
