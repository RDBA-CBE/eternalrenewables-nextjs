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

export default function CapabilityCard({
  icon,
  title,
  linkUrl,
  hiddenBtn,
  titleColor="text-white",
  description,
  iconBoxClassNames = "icon btn btn-circle btn-lg btn-primary pe-none mb-5"
}: ServiceCard2Props) {
  return (
    <div className="col-md-6 col-lg-3">
    {/* <IconBox icon={icon} className={iconBoxClassNames} /> */}
    <div className={iconBoxClassNames}>
      <img src={icon} alt={title || "Icon"} style={{width:"32px"}} />
    </div>
    <h4 className={titleColor}>{title}</h4>
    <p className="mb-3 text-white">{description}</p>
    {/* {hiddenBtn ? null : <NextLink title="Learn More" href={linkUrl} className="more hover" />} */}
  </div>
  
  );
}
