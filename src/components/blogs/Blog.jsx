import { serviceList2 } from "data/service";
// CUSTOM UTILS LIBRARY FUNCTIONS
import { slideInDownAnimate } from "utils/animation";
import MediaCard from "../media/MediaCard"
import  BlogCard  from "components/blogs/BlogCard";


export default function Blog({title,subtitle,blogList1}) {
     const mediaList = [
      {
        id: 1,
        linkUrl: 'events',
        title: 'Events',
        icon: 'uil-phone-volume',
        description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
      },
      {
        id: 2,
        linkUrl: 'testimonials',
        title: 'Testimonials',
        icon: 'uil-shield-exclamation',
        description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
      },
      {
        id: 3,
        linkUrl: 'casestudies',
        title: 'Case Studies',
        icon: 'uil-laptop-cloud',
        description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
      },
      {
        id: 4,
        linkUrl: 'blogs',
        title: 'Blogs',
        icon: 'uil-chart-line',
        description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
      }
    ];
  return (
    <section className="wrapper bg-white ">
      <div className="container pt-5 pt-md-14 pb-10 pb-md-12">
        {/* <figure className="rounded mt-md-n21 mt-lg-n23 mb-5 mb-md-10" style={slideInDownAnimate("900ms")}>
          <img src="/img/photos/about15.jpg" srcSet="/img/photos/about15@2x.jpg 2x" alt="" />
        </figure> */}

        {/* <div className="row">
          <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
            <h3 className="display-3 text-green mb-5 mb-lg-10">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
        </div> */}

        <BlogCard title={title} subtitle={subtitle} blogList1={blogList1}/>

        {/* <div className="row gx-md-8 gy-8 text-center text-white">
          {mediaList.map((item) => (
            <MediaCard {...item} key={item.id} titleColor="text-white" hiddenBtn />
          ))}
        </div> */}
      </div>
    </section>
  );
}
