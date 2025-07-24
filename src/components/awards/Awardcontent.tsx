import Link from "next/link";
import Image from "next/image";

// ==============================================================
interface ProjectCard4Props {
  id: number;
  image: string;
  title: string;
  // color: string;
//   category: string;
}
// ==============================================================

export default function Awardcontent({ image, title, }: ProjectCard4Props) {
  return (
    <div className="card shadow-lg">
      <figure className="card-img-top">
        <Link href="#">
          <Image src={image} width={1300} height={1132} alt="" />
        </Link>
      </figure>

      <div className="card-body p-7">
        <div className="post-header">
          
          <h3 className="mb-0 text-green1">{title}</h3>
        </div>
      </div>
    </div>
  );
}