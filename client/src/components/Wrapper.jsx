import React from "react";
import Menu from "./Menu/Menu";
import Content from "./Tasks/Content";

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = {
      activeProjectId: null
    };
  }

  activeProjectId = async id => {
    await this.setState({ activeProjectId: id });
    console.log(`wrapper ${this.state.activeProjectId}`);
    await this.child.current.updateTasks();
  };

  render() {
    return (
      <div className="wrapper">
        <Menu activeProjectId={this.activeProjectId} />
        <Content
          activeProjectId={this.state.activeProjectId}
          ref={this.child}
        />
      </div>
    );
  }
}
