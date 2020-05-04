import React from "react";
import logo from "./logo.svg";
//Improt browser Router, Route, and Link Components
import { BrowserRouter, Route, Link } from "react-router-dom";
//Import different pages
import Projects from "./Projects";
import Articles from "./Articles";
import About from "./About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />

        <div className="navigation">
          <img src={logo} className="logo" alt="Logo Image" />
          <div className="navigation-sub">
            <Link href="" clLinkssName="item">
              Projects
            </Link>
            <Link href="" className="item">
              Articles
            </Link>
            <Link href="" className="item">
              About
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
