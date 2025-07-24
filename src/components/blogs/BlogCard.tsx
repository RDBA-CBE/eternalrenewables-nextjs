import Carousel from "components/reuseable/Carousel";
import { BlogCard1 } from "components/reuseable/blog-cards";
// CUSTOM UTILS LIBRARY FUNCTIONS
import carouselBreakpoints from "utils/carouselBreakpoints";
// CUSTOM DATA


export default function BlogCard(props: any) {
  const { title,subtitle,blogList1 } = props;
  return (
    <section className="wrapper bg-light angled upper-end blog-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 col-xl-12 col-xxl-12">
            <h2 className="fs-16 text-uppercase text-line text-green1 mb-3">
              {title}
            </h2>
            <h3 className="display-6 text-orange1 mb-9">
             {subtitle}
            </h3>
          </div>
        </div>

        <div className="swiper-container blog grid-view mb-10">
          <Carousel
            grabCursor
            navigation={false}
            breakpoints={carouselBreakpoints}
          >
            {blogList1.map((item:any) => (
              <BlogCard1 key={item.id} {...item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
