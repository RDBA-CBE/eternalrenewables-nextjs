import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface NextLinkProps extends LinkProps {
  title: ReactNode;
  className?: string;
  openInNewTab?: boolean; // 👈 add this
}

export default function NextLink({
  title,
  openInNewTab,
  ...props
}: NextLinkProps) {
  if (openInNewTab) {
    return (
      <a
        href={props.href?.toString()}
        className={props.className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    );
  }

  return <Link {...props}>{title}</Link>;
}
