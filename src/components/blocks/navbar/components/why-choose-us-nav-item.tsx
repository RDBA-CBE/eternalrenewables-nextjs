// GLOBAL CUSTOM COMPONENTS
import ListItemLink from "components/reuseable/links/ListItemLink";
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";


export default function WhyChooseUsNavItem() {
    const mediaNavigation = [
        { id: 1, url: "/awards", title: "Awards & Recognition" },
        
      ];

      const mediaMblNavigation = [
        { id: 1, url: "/whychooseus", title: "Overview" },
        { id: 2, url: "/awards", title: "Awards & Recognition" },
        
      ];
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink title="whychooseus" className="nav-link text-blue dropdown-toggle d-block d-lg-none" />
      <a href="whychooseus"  className="nav-link text-blue dropdown-toggle  d-none d-lg-block" >
           Why Choose Us
              </a>

      <ul className="dropdown-menu d-none d-lg-block">
        {mediaNavigation.map(({ id, url, title }) => {
          
          return <ListItemLink key={id} href={url} title={title} linkClassName="dropdown-item" />;
        })}
      </ul>

      <ul className="dropdown-menu d-block d-lg-none">
        {mediaMblNavigation.map(({ id, url, title }) => {
          
          return <ListItemLink key={id} href={url} title={title} linkClassName="dropdown-item" />;
        })}
      </ul>
    </li>
  );
}