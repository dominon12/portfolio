import React, { lazy } from "react";

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

const routes = [
  {
    path: "/",
    component: HomeRedirect,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    path: "/skills",
    component: Skills,
    exact: true,
  },
  {
    path: "/experience",
    component: Experience,
    exact: true,
  },
  {
    path: "/projects",
    component: Projects,
    exact: true,
  },
  {
    path: "/contact",
    component: Contact,
    exact: true,
  },
  {
    path: "/languages",
    component: Languages,
    exact: true,
  },
  {
    path: "/donate",
    component: Donate,
    exact: true,
  },
  {
    path: "/download",
    component: Download,
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
    exact: false,
  },
];

export default routes;
