import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Pricing from "./Pricing"
import Contact from "./Contact";
import "./Maincssweb.css";
import Componete2 from "./Componete2";
import Download from "./Download";




export default function BasicExample() {
    return (      
      <Router>
        <header>
  <nav className="navbar  navbar-fixed-top navbar-default">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle uarr collapsed" data-toggle="collapse" data-target="#navbar-collapse-uarr">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="./index.html" title="">
          <img  className="navbar-logo-img mesu" alt="image" />
        </a>
      </div>

      <div className="collapse navbar-collapse" id="navbar-collapse-uarr">
      <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/" className="active">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Componete2">Componete</Link>
            </li>
            <li>
              <p>
              <Link to="/Download" className="btn btn-primary navbar-btn">Download</Link>
              </p>
            </li>

          </ul>
      </div>
    </div>
  </nav>
</header>    
          
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/Pricing">
              <Pricing />
            </Route>
            <Route path="/Contact">
              <Contact/>
            </Route>
            <Route path="/Componete2">
              <Componete2/>
            </Route>
            <Route path="/Download">
              <Download/>
            </Route>
          </Switch>
        
      </Router>
    );
  }

