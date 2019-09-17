import React from "react";
import { Route, Redirect } from "react-router-dom";
import classes from "./Wrapper.module.css";

import Menu from "./Menu/Menu";
import Content from "./Container/Content/Content";
import EmptyContent from "./Container/Content/EmptyContent";

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.logout = this.logout.bind(this);
  }

  componentWillMount = () => {
    if (!localStorage.getItem("userData")) {
      this.setState({ redirect: true });
    }
  };

  logout = () => {
    localStorage.setItem("userData", "");
    localStorage.clear();
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div className={classes.wrapper}>
        <Menu />
        <Route exact path="/home" component={EmptyContent} />
        <Route exact path="/home/project/:id" component={Content} />
        <button className={classes.btn_logout} onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}
