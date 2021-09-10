import React, { Component } from 'react';

class Menu extends Component {

  constructor() {

    super();

    this.buildMenu = this.buildMenu.bind(this);

  }

  buildMenu() {

    return (

      <div className={"menu"}>
        <div className={this.props.isUXUI ? "active" : "inactive"}
        onClick={this.props.isUXUI ? this.props.menuPressed : null}>
          Web Dev & Design
        </div>
        <div className={this.props.isUXUI ? "inactive" : "active"}
        onClick={this.props.isUXUI ? null : this.props.menuPressed}>
          UX & UI
        </div>
      </div>
    )
  }

  render() {

    return (
            <div>
              {this.buildMenu()}
            </div>
    );
  }
}

export default Menu;
