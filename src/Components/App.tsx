import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
// components
import SideBar from "./Organisms/SideBar";
import Header from "./Organisms/Header";
import Footer from "./Organisms/Footer";
import SnackBar from "./Organisms/SnackBar";
import Loading from "./Molecules/Loading";
// services
import HomeRedirect from "./Services/HomeRedirect";
import ScrollToTop from "./Services/ScrollToTop";
import ErrorBoundary from "./Services/ErrorBoundary";
import ShareModal from "./Modals/ShareModal";
// import UpdateManager from "./Services/UpdateManager";
// pages
const About = lazy(() => import("./Pages/About"));
const Skills = lazy(() => import("./Pages/Skills"));
const Experience = lazy(() => import("./Pages/Experience"));
const Projects = lazy(() => import("./Pages/Projects"));
const Contact = lazy(() => import("./Pages/Contact"));
const Languages = lazy(() => import("./Pages/Languages"));
const Donate = lazy(() => import("./Pages/Donate"));
const Download = lazy(() => import("./Pages/Download"));
const NotFound = lazy(() => import("./Pages/NotFound"));

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* <UpdateManager /> */}

      <main className="main">
        <Header />
        <SideBar />

        <div className="content-wrapper" id="scrollContainer">
          <Suspense fallback={<Loading />}>
            <ErrorBoundary>
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
            </ErrorBoundary>
          </Suspense>

          <Footer />
        </div>

        <ShareModal />
        <SnackBar anchorOrigin={{ horizontal: "right", vertical: "bottom" }} />
      </main>
    </Router>
  );
};

export default App;
