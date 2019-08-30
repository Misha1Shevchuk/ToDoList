import React from "react";
import MenuProjects from "./Projects/MenuProjects/MenuProjects";
import MenuLabels from "./Labels/MenuLabels/MenuLabels";
import classes from "./Menu.module.css";

export default class Menu extends React.Component {
  render() {
    return (
      <div className={classes.menu}>
        <MenuProjects activeProjectId={this.props.activeProjectId} />
        <MenuLabels />
      </div>
    );
  }
}
