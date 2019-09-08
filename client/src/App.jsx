import React from "react";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Auth/Login";

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Wrapper} />
    </div>
  </BrowserRouter>
);

export default App;
