import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import { MainPage } from "./Components/MainPage";
import { Contact } from "./Components/Contact";

import "./App.css";
import { useHistory as history } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Router history={history}> */}

      <Router history={history}>
        <Switch>
          <Route exact path={"/"} component={MainPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
