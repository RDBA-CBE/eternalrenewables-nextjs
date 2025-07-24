import { serviceList2 } from "data/service";
// CUSTOM UTILS LIBRARY FUNCTIONS
import { slideInDownAnimate } from "utils/animation";
import MediaCard from "../media/MediaCard"


export default function MediaList() {
     const mediaList = [
      {
        id: 1,
        linkUrl: 'events',
        title: 'Events',
        icon: '/img/Media/events.png',
        description: `Get to know about upcoming events—conferences, webinars, and community gatherings with respect to clean energy solutions.`
      },
      {
        id: 2,
        linkUrl: 'testimonials',
        title: 'Testimonials',
        icon: '/img/Media/testimnals.png',
        description: `Get to know about the real-world impact of our energy projects – hear directly from our partners, clients and stakeholders.`
      },
      {
        id: 3,
        linkUrl: 'casestudies',
        title: 'Case Studies',
        icon: '/img/Media/case.png',
        description: `Explore case studies highlighting challenges overcome and innovative solutions that drove impact in our renewable energy projects.`
      },
      {
        id: 4,
        linkUrl: 'blogs',
        title: 'Blogs',
        icon: '/img/Media/blog.png',
        description: `Discover the latest trends, tech advancements, and insights in sustainable development and renewable energy.`
      }
    ];
  return (
    <section className="wrapper bg-white">
      <div className="container pt-5 pt-md-14 pb-10 pb-md-12">
        <figure className="rounded mt-md-n21 mt-lg-n23 mb-5 mb-md-10 " style={slideInDownAnimate("900ms")}>
          <img src="/img/Media/image.jpg"  alt="" />
        </figure>

        {/* <div className="row">
          <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
            <h3 className="display-3 text-green mb-5 mb-lg-10">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
        </div> */}

        <div className="row gx-md-8 gy-8 text-center text-white">
          {mediaList.map((item) => (
            <MediaCard {...item} key={item.id} titleColor="text-white" hiddenBtn />
          ))}
        </div>
      </div>
    </section>
  );
}
