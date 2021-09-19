import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
// components
import SideBar from "../Organisms/SideBar";
import Header from "../Organisms/Header";
import HomeRedirect from "../Services/HomeRedirect";
// pages
import About from "../Pages/About";
import Technologies from "../Pages/Technologies";
import Experience from "../Pages/Experience";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import Languages from "../Pages/Languages";
import Hobbies from "../Pages/Hobbies";
import Donate from "../Pages/Donate";
import Download from "../Pages/Download";
import NotFound from "../Pages/NotFound";
// contexts
import SideBarProvider from "../../Contexts/SideBarContext";

const App: React.FC = () => {
  return (
    <Router>
      <main className="main">
        <SideBarProvider>
          <Header />
          <SideBar />
        </SideBarProvider>

        <section className="content-wrapper">
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
            <Route path="*" component={NotFound} />
          </Switch>
        </section>
      </main>
    </Router>
  );
};

export default App;
