// GLOBAL CUSTOM COMPONENTS
import ListItemLink from "components/reuseable/links/ListItemLink";
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
import { useState } from "react";


export default function ProjectsNavItem() {
  const mediaNavigation = [
    { id: 1, url: "/ongoing-projects", title: "Ongoing Projects" },
    { id: 2, url: "/upcoming-projects", title: "Upcoming Projects" },
    { id: 3, url: "/completed-projects", title: "Completed Projects" },
  ];

  const mediaMblNavigation = [
    { id: 1, url: "/projects", title: "Overview" },
    { id: 2, url: "/ongoing-projects", title: "Ongoing Projects" },
    { id: 3, url: "/upcoming-projects", title: "Upcoming Projects" },
    { id: 4, url: "/completed-projects", title: "Completed Projects" },
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <li className="nav-item dropdown">
      {/* Mobile Toggle Link */}
      <DropdownToggleLink
        title="Projects"
        className="nav-link text-blue dropdown-toggle d-block d-lg-none"
        onClick={() => setToggle(!toggle)}
      />

      {/* Desktop Link */}
      <a
        href="projects"
        className="nav-link text-orange dropdown-toggle d-none d-lg-block"
      >
        Projects
      </a>

      {/* Desktop Menu */}
      <ul className="dropdown-menu d-none d-lg-block" >
        {mediaNavigation.map(({ id, url, title }) => (
          <ListItemLink
            key={id}
            href={url}
            title={title}
            linkClassName="dropdown-item"
          />
        ))}
      </ul>

      {/* Mobile Menu - toggled */}
      <ul className={`dropdown-menu ${toggle ? "d-block" : "d-none"} d-lg-none`}>
        {mediaMblNavigation.map(({ id, url, title }) => (
          <ListItemLink
            key={id}
            href={url}
            title={title}
            linkClassName="dropdown-item"
          />
        ))}
      </ul>
    </li>
  );
}
