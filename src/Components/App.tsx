import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
// components
import SideBar from "./Organisms/SideBar";
import Header from "./Organisms/Header";
import SnackBar from "./Organisms/SnackBar";
// pages
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Languages from "./Pages/Languages";
import Donate from "./Pages/Donate";
import Download from "./Pages/Download";
import NotFound from "./Pages/NotFound";
// services
import HomeRedirect from "./Services/HomeRedirect";
import ScrollToTop from "./Services/ScrollToTop";
import ErrorBoundary from "./Services/ErrorBoundary";
import ShareModal from "./Modals/ShareModal";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />

      <main className="main">
        <Header />
        <SideBar />

        <section className="content-wrapper" id="scrollContainer">
          {/* <ErrorBoundary> */}
          <Switch>
            <Route path="/" component={HomeRedirect} exact />
            <Route path="/about" component={About} exact />
            <Route path="/skills" component={Skills} exact />
            <Route path="/experience" component={Experience} exact />
            <Route path="/projects" component={Projects} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/languages" component={Languages} exact />
            <Route path="/donate" component={Donate} exact />
            <Route path="/download" component={Download} exact />
            <Route path="*" component={NotFound} />
          </Switch>
          {/* </ErrorBoundary> */}
        </section>

        <ShareModal />
        <SnackBar anchorOrigin={{ horizontal: "right", vertical: "bottom" }} />
      </main>
    </Router>
  );
};

export default App;
