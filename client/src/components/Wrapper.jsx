import React from "react";
import { Route } from "react-router-dom";
import classes from "./Wrapper.module.css";

import Menu from "./Menu/Menu";
import Content from "./Container/Content/Content";
import EmptyContent from "./Container/Content/EmptyContent";

const Wrapper = () => (
  <div className={classes.wrapper}>
    <Menu />
    <Route exact path="/" component={EmptyContent} />
    <Route exact path="/project/:id" component={Content} />
  </div>
);

export default Wrapper;
