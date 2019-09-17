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
      a: null,
      redirect: false
    };
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    if (!sessionStorage.getItem("userData")) {
      this.setState({ redirect: true });
    }
  }

  logout() {
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div className={classes.wrapper}>
        <Menu />
        <Route exact path="/" component={EmptyContent} />
        <Route path="/project" component={Content} />
        <button className={classes.btn_logout} onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}
