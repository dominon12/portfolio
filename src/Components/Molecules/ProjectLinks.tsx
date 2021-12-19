import React from "react";

import "./ProjectLinks.scss";
import BrickLink from "../Atoms/BrickLink";

interface Props {
  link?: string;
  repository?: string;
}

/**
 * Renders links to projects' page
 * or to project's source code if
 * the project has one.
 *
 * @return {*}  {JSX.Element}
 */
const ProjectLinks: React.FC<Props> = (props): JSX.Element => {
  const links = [
    {
      id: 1,
      name: "Project link 🔗",
      href: props.link,
    },
    {
      id: 2,
      name: "Source code 🤖",
      href: props.repository,
    },
  ];

  return (
    <div className="project-links">
      {links
        .filter((link) => !!link.href)
        .map((link: any) => (
          <BrickLink
            key={link.id}
            href={link.href}
            className="project-links__link"
            rel="noopener"
          >
            {link.name}
          </BrickLink>
        ))}
    </div>
  );
};

export default ProjectLinks;
