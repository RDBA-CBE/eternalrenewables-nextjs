import { HTMLAttributes } from "react";
import IconBox from "components/reuseable/IconBox";
import NextLink from "components/reuseable/links/NextLink";

// ================================================
interface ServiceCard2Props {
  icon: string;
  title: string;
  linkUrl: string;
  description: string;
  titleColor?: string;
  hiddenBtn?: boolean;
  iconBoxClassNames?: HTMLAttributes<HTMLDivElement>["className"];
}
// ================================================

export default function MediaCard({
  icon,
  title,
  linkUrl,
  hiddenBtn,
  titleColor,
  description,
  iconBoxClassNames = "icon btn btn-circle btn-lg bg-orange1 pe-none mb-5"
}: ServiceCard2Props) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className={iconBoxClassNames}>
        <img
          src={icon}
          alt={title}
          className="img-fluid"
          style={{ maxHeight: "60px", width: "auto" }}
        />
      </div>
      <h4 className="text-green1">{title}</h4>
      <p className="mb-3 ">{description}</p>
       {/* <NextLink title="Learn More" href={linkUrl} className="more hover text-orange1" /> */}
    </div>
  );
}
