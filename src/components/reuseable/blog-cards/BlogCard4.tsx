import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "../links/NextLink";

// ======================================================
interface BlogCard4Props {
  date: string;
  image: string;
  title: string;
  category: string;
  className?: string;
  description: string;
}
// ======================================================

export default function BlogCard4(props: BlogCard4Props) {
  const { date, image, title, category, description, className = "card bg-orange1" } = props;

  return (
    <article>
      <div className={className}>
        <figure className="card-img-top overlay overlay-1 hover-scale ">
          <Link href="#">
            <Image width={560} height={350} src={image} alt={title} className="w-100 h-auto" />
            <span className="bg" />
          </Link>

          <figcaption>
            <h5 className="from-top mb-0">Read More</h5>
          </figcaption>
        </figure>

        <div className="card-body">
          <div className="post-header">
            <h2 className="post-title h3 mt-1 mb-3 text-white">
              <NextLink title={title} className="text-white " href="#" />
            </h2>
          </div>

          <div className="post-content text-white">
            <p className="text-white">{description}</p>
          </div>
        </div>

        <div className="card-footer">
          <ul className="post-meta d-flex mb-0">
            <li className="post-date">
              <i className="uil uil-calendar-alt text-white" />
              <span className="text-white">{dayjs(date).format("DD MMM YYYY")}</span>
            </li>

            {/* <li className="post-comments">
              <NextLink
                href="#"
                className="text-blue"
                title={
                  <>
                    <i className="uil uil-file-alt fs-15" />
                    {category}
                  </>
                }
              />
            </li> */}
          </ul>
        </div>
      </div>
    </article>
  );
}
