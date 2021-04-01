import React from "react";
import { Route } from "react-router";
import "./App.css";
import Autorization from "./components/autorizatoin/autorization";
import MainPage from "./components/mainPage/mainPage";

function App(props) {
  return (
    <div className="App">
      <Route exact path="/" render={() => <MainPage props={props} />} />
      <Route exact path="/auth" render={() => <Autorization />} />
    </div>
  );
}

export default App;
