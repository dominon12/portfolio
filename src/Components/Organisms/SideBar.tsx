import React, { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router";
// icons
import { IoAccessibility, IoLanguage } from "react-icons/io5";
import { AiFillApi } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { FaProjectDiagram, FaDonate, FaDownload } from "react-icons/fa";
import { TiMessageTyping } from "react-icons/ti";
import { RiArticleLine } from "react-icons/ri";

import "./SideBar.scss";
import NavTab from "../Atoms/NavTab";
import { ITab } from "../../Types/SystemTypes";
import { SideBarContext } from "../../Contexts/SideBarContext";
import ThemeSwitch from "../Atoms/ThemeSwitch";

/**
 * Renders a side bar and handles logic
 * of hiding it if user clicked outside of it or
 * outside of header or navigated to another page
 *
 * @return {*}  {JSX.Element}
 */
const SideBar: React.FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const { visible, setVisible } = useContext(SideBarContext);

  const asideRef = useRef<any>(null);

  /**
   * Hides side bar if user clicked outside of
   * the navbar or header
   */
  useEffect(() => {
    const headerElement = document.getElementById("header");

    const handleClickOutside = (event: any) => {
      if (
        asideRef.current &&
        !asideRef.current.contains(event.target) &&
        !headerElement?.contains(event.target)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [asideRef]);

  /**
   * Hides side bar on url changes
   */
  useEffect(() => {
    setVisible(false);
  }, [pathname]);

  const TABS: ITab[] = [
    {
      id: 1,
      link: "/about",
      icon: IoAccessibility,
      title: "About",
      isActive: false,
      orderNumber: 1,
    },
    {
      id: 4,
      link: "/projects",
      icon: FaProjectDiagram,
      title: "Projects",
      isActive: false,
      orderNumber: 2,
    },
    {
      id: 2,
      link: "/skills",
      icon: AiFillApi,
      title: "Skills",
      isActive: false,
      orderNumber: 3,
    },
    {
      id: 3,
      link: "/experience",
      icon: MdWork,
      title: "Experience",
      isActive: false,
      orderNumber: 4,
    },
    {
      id: 6,
      link: "/languages",
      icon: IoLanguage,
      title: "Languages",
      isActive: false,
      orderNumber: 5,
    },
    {
      id: 10,
      link: "/blog",
      icon: RiArticleLine,
      title: "Blog",
      isActive: false,
      orderNumber: 6,
    },
    {
      id: 8,
      link: "/donate",
      icon: FaDonate,
      title: "Donate",
      isActive: false,
      orderNumber: 7,
    },
    {
      id: 5,
      link: "/contact",
      icon: TiMessageTyping,
      title: "Contact",
      isActive: false,
      orderNumber: 8,
    },
    {
      id: 9,
      link: "/download",
      icon: FaDownload,
      title: "Download",
      isActive: false,
      orderNumber: 9,
    },
  ];

  return (
    <aside
      ref={asideRef}
      role="tablist"
      aria-hidden={!visible}
      className={`aside ${visible ? "active" : "inactive"}`}
    >
      <div className="aside__content">
        <NavTab>~ Menu ~</NavTab>
        {TABS.sort((a, b) => a.orderNumber - b.orderNumber).map((tab) => (
          <NavTab key={tab.id} tabData={tab} />
        ))}
      </div>
      <div className="aside__theme-switch">
        <ThemeSwitch />
      </div>
    </aside>
  );
};

export default SideBar;
