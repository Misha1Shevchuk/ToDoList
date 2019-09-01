import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Menu from "./Menu/Menu";
import Content from "./Tasks/Content";
import EmptyContent from "./Tasks/EmptyContent";

const Wrapper = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Menu />
      <Route exact path="/" component={EmptyContent} />
      <Route exact path="/project/:id" component={Content} />
    </div>
  </BrowserRouter>
);

export default Wrapper;
