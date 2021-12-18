import React, { Suspense } from "react";
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
import ScrollToTop from "./Services/ScrollToTop";
import ErrorBoundary from "./Services/ErrorBoundary";
import PWAManager from "./Services/PWAManager";
// routes
import routes from "../Routes";

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
                {routes.map((route) => (
                  <Route
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                  />
                ))}
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
