import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
// components
import NavBar from "../Organisms/NavBar";
import HomeRedirect from "../Services/HomeRedirect";
// pages
const About = lazy(() => import("../Pages/About"));
const Technologies = lazy(() => import("../Pages/Technologies"));
const Experience = lazy(() => import("../Pages/Experience"));
const Projects = lazy(() => import("../Pages/Projects"));
const Contact = lazy(() => import("../Pages/Contact"));
const Languages = lazy(() => import("../Pages/Languages"));
const Hobbies = lazy(() => import("../Pages/Hobbies"));
const Donate = lazy(() => import("../Pages/Donate"));
const Download = lazy(() => import("../Pages/Download"));
const NotFound = lazy(() => import("../Pages/NotFound"));

const App: React.FC = () => {
  return (
    <main className="main">
      <NavBar />

      <section className="content-wrapper">
        <Router>
          <Switch>
            <Route path="/" component={HomeRedirect} exact />
            <Route path="/about" component={About} exact />
            <Route path="/technologies" component={Technologies} exact />
            <Route path="/experience" component={Experience} exact />
            <Route path="/projects" component={Projects} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/languages" component={Languages} exact />
            <Route path="/hobbies" component={Hobbies} exact />
            <Route path="/donate" component={Donate} exact />
            <Route path="/download" component={Download} exact />
            <Route path="/download" component={Download} exact />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </section>
    </main>
  );
};

export default App;
