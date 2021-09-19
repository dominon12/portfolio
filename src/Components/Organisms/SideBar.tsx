import React, { useContext } from "react";
// icons
import { IoAccessibility, IoLanguage } from "react-icons/io5";
import { AiFillApi } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { FaProjectDiagram, FaDonate, FaDownload } from "react-icons/fa";
import { BiCycling } from "react-icons/bi";
import { TiMessageTyping } from "react-icons/ti";

import "./SideBar.scss";
import NavTab from "../Atoms/NavTab";
import { Tab } from "../../Types/Types";
import { SideBarContext } from "../../Contexts/SideBarContext";

const SideBar: React.FC = () => {
  const { visible } = useContext(SideBarContext);

  const TABS: Tab[] = [
    {
      id: 1,
      link: "/about",
      icon: IoAccessibility,
      title: "About",
      isActive: false,
    },
    {
      id: 2,
      link: "/technologies",
      icon: AiFillApi,
      title: "Technologies",
      isActive: false,
    },
    {
      id: 3,
      link: "/experience",
      icon: MdWork,
      title: "Experience",
      isActive: false,
    },
    {
      id: 4,
      link: "/projects",
      icon: FaProjectDiagram,
      title: "Projects",
      isActive: false,
    },
    {
      id: 5,
      link: "/contact",
      icon: TiMessageTyping,
      title: "Contact",
      isActive: false,
    },
    {
      id: 6,
      link: "/languages",
      icon: IoLanguage,
      title: "Languages",
      isActive: false,
    },
    {
      id: 7,
      link: "/hobbies",
      icon: BiCycling,
      title: "Hobbies",
      isActive: false,
    },
    {
      id: 8,
      link: "/donate",
      icon: FaDonate,
      title: "Donate",
      isActive: false,
    },
    {
      id: 9,
      link: "/download",
      icon: FaDownload,
      title: "Download",
      isActive: false,
    },
  ];

  return (
    <aside className={`aside ${visible ? "active" : "inactive"}`}>
      {TABS.map((tab) => (
        <NavTab key={tab.id} tabData={tab} />
      ))}
    </aside>
  );
};

export default SideBar;
