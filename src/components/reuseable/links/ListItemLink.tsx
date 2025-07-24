import { ReactElement } from "react";
import NextLink from "./NextLink";

// =========================================================
interface ListItemLinkProps {
  href: string;
  liClassName?: string;
  linkClassName?: string;
  title: string | ReactElement;
  openInNewTab?: boolean; // 👈 add this
}

export default function ListItemLink({
  href,
  title,
  liClassName = "nav-item",
  linkClassName = "nav-link",
  openInNewTab = false // 👈 default false
}: ListItemLinkProps) {
  return (
    <li className={liClassName}>
      <NextLink
        className={linkClassName}
        href={href}
        title={title}
        openInNewTab={openInNewTab} 
      />
    </li>
  );
}
