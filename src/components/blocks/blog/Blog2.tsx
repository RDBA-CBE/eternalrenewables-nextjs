import Carousel from "components/reuseable/Carousel";
import { BlogCard4 } from "components/reuseable/blog-cards";
// CUSTOM DATA
import { blogList } from "data/demo-11";

export default function Blog2() {
  const carouselBreakpoints = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 }
  };

  return (
    <div>
      <div className="row text-center">
        <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
          <h2 className="fs-15 text-uppercase mb-3 text-white">Stay updated on the latest trends</h2>
          <h3 className="display-3-n mb-6 ">
            Events and Media
          </h3>
        </div>
      </div>

      <div className="position-relative">
        <div className="shape  rellax w-17 h-20" style={{ top: 0, left: "-1.7rem" }} />

        <div className="swiper-container dots-closer blog grid-view mb-6 ">
          <Carousel grabCursor spaceBetween={40} navigation={false} breakpoints={carouselBreakpoints}>
            {blogList.map((item) => (
              <div className="item-inner px-0" key={item.id}>
                <BlogCard4 {...item} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
