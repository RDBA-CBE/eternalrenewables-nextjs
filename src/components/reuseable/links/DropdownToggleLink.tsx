import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

// ==========================================================
interface DropdownToggleLinkProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  title: string;
}
// ==========================================================

export default function DropdownToggleLink({ title, className, ...others }: DropdownToggleLinkProps) {
  return (
    <a href="/media" data-bs-toggle="dropdown" className={className || "dropdown-item dropdown-toggle"} {...others}>
      {title}
    </a>
  //   <a href="about" data-bs-toggle="dropdown" className={className } {...others}>
  //   {title}
  // </a>
  );
}
