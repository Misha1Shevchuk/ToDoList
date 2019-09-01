import React from "react";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper";
import {BrowserRouter} from "react-router-dom";

const App = () => (
<BrowserRouter>
<div>
      <Header />
      <Wrapper />
    </div>
    </BrowserRouter>

);

export default App;
