import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

import HomeRedirect from "./Components/Services/HomeRedirect";
const About = lazy(() => import("./Components/Pages/About"));
const Skills = lazy(() => import("./Components/Pages/Skills"));
const Experience = lazy(() => import("./Components/Pages/Experience"));
const Projects = lazy(() => import("./Components/Pages/Projects"));
const Contact = lazy(() => import("./Components/Pages/Contact"));
const Languages = lazy(() => import("./Components/Pages/Languages"));
const Donate = lazy(() => import("./Components/Pages/Donate"));
const Download = lazy(() => import("./Components/Pages/Download"));
const NotFound = lazy(() => import("./Components/Pages/NotFound"));

export const HOME_ROUTE = "HOME_ROUTE";
export const ABOUT_ROUTE = "ABOUT_ROUTE";
export const SKILLS_ROUTE = "SKILLS_ROUTE";
export const EXPERIENCE_ROUTE = "HOME_ROUTE";
export const PROJECTS_ROUTE = "PROJECTS_ROUTE";
export const CONTACT_ROUTE = "CONTACT_ROUTE";
export const LANGUAGES_ROUTE = "LANGUAGES_ROUTE";
export const DONATE_ROUTE = "DONATE_ROUTE";
export const DOWNLOAD_ROUTE = "DOWNLOAD_ROUTE";
export const NOT_FOUND_ROUTE = "NOT_FOUND_ROUTE";

const routes = [
  {
    id: HOME_ROUTE,
    path: "/",
    component: HomeRedirect,
    exact: true,
  },
  {
    id: ABOUT_ROUTE,
    path: "/about",
    component: About,
    exact: true,
  },
  {
    id: SKILLS_ROUTE,
    path: "/skills",
    component: Skills,
    exact: true,
  },
  {
    id: EXPERIENCE_ROUTE,
    path: "/experience",
    component: Experience,
    exact: true,
  },
  {
    id: PROJECTS_ROUTE,
    path: "/projects",
    component: Projects,
    exact: true,
  },
  {
    id: CONTACT_ROUTE,
    path: "/contact",
    component: Contact,
    exact: true,
  },
  {
    id: LANGUAGES_ROUTE,
    path: "/languages",
    component: Languages,
    exact: true,
  },
  {
    id: DONATE_ROUTE,
    path: "/donate",
    component: Donate,
    exact: true,
  },
  {
    id: DOWNLOAD_ROUTE,
    path: "/download",
    component: Download,
    exact: true,
  },
  {
    id: NOT_FOUND_ROUTE,
    path: "*",
    component: NotFound,
    exact: false,
  },
];

export const getRouteConfig = (id: string) => {
  const route = routes.find((r) => r.id === id);

  if (route) {
    const { component, ...rest } = route;
    return rest;
  }
};

export const getRouteId = (pathname: string) => {
  const route = routes.find((r) => r.path === pathname);
  if (route) return route.id;
};

export default function Routes() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </Switch>
  );
}
