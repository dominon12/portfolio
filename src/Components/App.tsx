import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import "./App.scss";
// history
import { history } from "../Redux/Store";
// components
import SideBar from "./Organisms/SideBar";
import Header from "./Organisms/Header";
import Footer from "./Organisms/Footer";
import Loading from "./Molecules/Loading";
// services
import HomeRedirect from "./Services/HomeRedirect";
import ScrollToTop from "./Services/ScrollToTop";
import ErrorBoundary from "./Services/ErrorBoundary";
import PWAManager from "./Services/PWAManager";
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
    <ConnectedRouter history={history}>
      <ScrollToTop />
      <PWAManager />

      <main className="main">
        <Header />
        <SideBar />

        <div role="main" className="content-wrapper" id="scrollContainer">
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
      </main>
    </ConnectedRouter>
  );
};

export default App;
