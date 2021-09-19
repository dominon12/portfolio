import React, { useState } from "react";
// icons
import { IoAccessibility, IoLanguage } from "react-icons/io5";
import { AiFillApi } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { FaProjectDiagram, FaDonate, FaDownload } from "react-icons/fa";
import { BiCycling } from "react-icons/bi";
import { TiMessageTyping } from "react-icons/ti";
import { GiHamburgerMenu, GiSplitCross } from "react-icons/gi";

import "./SideBar.scss";
import NavTab from "../Atoms/NavTab";
import { Tab } from "../../Types/Types";

const SideBar: React.FC = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const TABS: Tab[] = [
    {
      id: 1,
      link: "/about",
      icon: IoAccessibility,
      title: "About",
    },
    {
      id: 2,
      link: "/technologies",
      icon: AiFillApi,
      title: "Technologies",
    },
    {
      id: 3,
      link: "/experience",
      icon: MdWork,
      title: "Experience",
    },
    {
      id: 4,
      link: "/projects",
      icon: FaProjectDiagram,
      title: "Projects",
    },
    {
      id: 5,
      link: "/contact",
      icon: TiMessageTyping,
      title: "Contact",
    },
    {
      id: 6,
      link: "/languages",
      icon: IoLanguage,
      title: "Languages",
    },
    {
      id: 7,
      link: "/hobbies",
      icon: BiCycling,
      title: "Hobbies",
    },
    {
      id: 8,
      link: "/donate",
      icon: FaDonate,
      title: "Donate",
    },
    {
      id: 9,
      link: "/download",
      icon: FaDownload,
      title: "Download",
    },
  ];

  const renderBurger = () =>
    showSideBar ? (
      <GiSplitCross
        className="aside__burger"
        onClick={() => setShowSideBar(false)}
      />
    ) : (
      <GiHamburgerMenu
        className="aside__burger"
        onClick={() => setShowSideBar(true)}
      />
    );

  return (
    <aside className={`aside ${showSideBar ? "active" : "inactive"}`}>
      {renderBurger()}
      {TABS.map((tab) => (
        <NavTab key={tab.id} tabData={tab} />
      ))}
    </aside>
  );
};

export default SideBar;
