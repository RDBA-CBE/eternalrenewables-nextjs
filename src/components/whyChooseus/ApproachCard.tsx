import NextLink from "components/reuseable/links/NextLink";
import { HTMLAttributes } from "react";
import IconProps from "types/icon";
import { LinkType } from "types/demo-1";

// ===============================================================
interface ServiceCard1Props {
  title: string;
  linkUrl: string;
  linkType: LinkType;
  description: string;
  cardClassName?: string;
  iconBoxClassNames?: HTMLAttributes<HTMLDivElement>["className"];
  icon: string;
}
// ===============================================================

export default function ApproachCard({
  title,
  icon,
  linkUrl,
  linkType,
  description,
  cardClassName = "h-100 d-flex flex-column bg-orange1",
  iconBoxClassNames = ""
}: ServiceCard1Props) {
  return (
 <div className="col-md-6 col-xl-3 d-flex">
  <div className={`card shadow-lg ${cardClassName}`}>
    <div className="card-body d-flex flex-column align-items-center">
      <div className={iconBoxClassNames}>
        <img src={icon} alt={title || "Card icon"} />
      </div>
      <h4 className="text-white">{title}</h4>
      <p className="mb-2 flex-grow-1 text-white">{description}</p>
      {/* <NextLink title="Learn More" href={linkUrl} className={`more hover link-${linkType}`} /> */}
    </div>
  </div>
</div>

  );
}
