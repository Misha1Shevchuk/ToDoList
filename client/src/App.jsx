import React from "react";
import Header from "./_components/Header/Header";
import Wrapper from "./_components/Wrapper";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./_components/Auth/Login";
import Sign from "./_components/Auth/Sign";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign" component={Sign} />
        <Route path="/home" component={Wrapper} />
      </div>
    </BrowserRouter>
  );
};

export default App;
