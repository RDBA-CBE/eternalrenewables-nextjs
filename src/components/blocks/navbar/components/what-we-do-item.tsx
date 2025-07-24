// GLOBAL CUSTOM COMPONENTS
import ListItemLink from "components/reuseable/links/ListItemLink";
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
import { useState } from "react";


export default function WhatWeDoNavItem() {
  const mediaNavigation = [
    { id: 1, url: "/wherewelead", title: " Where We Lead" },
    { id: 2, url: "/awards-and-achievements", title: " Awards" },
  ];

  const mediaMblNavigation = [
    { id: 1, url: "/whatwedo", title: "Overview" },
    { id: 2, url: "/wherewelead", title: " Where We Lead" },
    { id: 3, url: "/awards-and-achievements", title: " Awards" },
  ];
  const [toggle, setToggle] = useState(false);

  return (
    <li className="nav-item dropdown">
      {/* Mobile Toggle Link */}
      <DropdownToggleLink
        title="What We Do"
        className="nav-link text-blue dropdown-toggle d-block d-lg-none"
        onClick={() => setToggle(!toggle)}
      />

      {/* Desktop Link */}
      <a
        href="whatwedo"
        className="nav-link text-orange dropdown-toggle d-none d-lg-block"
      >
        What We Do
      </a>

      {/* Desktop Menu */}
      <ul className="dropdown-menu d-none d-lg-block">
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
