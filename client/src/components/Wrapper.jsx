import React from "react";
import Menu from "./Menu/Menu";
import Content from "./Tasks/Content";
import { Route, BrowserRouter } from "react-router-dom";

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = {
      activeProjectId: 0
    };
  }

  activeProjectId = async id => {
    await this.setState({ activeProjectId: id });
    await this.child.current.getList();
  };

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Menu activeProjectId={this.activeProjectId} />
          <Content
            activeProjectId={this.state.activeProjectId}
            ref={this.child}
          />
        </div>
      </BrowserRouter>
    );
  }
}
