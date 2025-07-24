// import { Carousel } from "bootstrap";

// import { testimonialList2 } from "data/testimonial-list";
// import { Clients1 } from "components/blocks/clients";
// import { TestimonialCard2 } from "components/reuseable/testimonial-cards";

// export default function Testimonials() {
//   return (
//     <section className="wrapper bg-gray">
//     <div className="container py-14 py-md-16">
//       {/* ========== testimonial section ========== */}
//       <div className="row gx-lg-8 gx-xl-12 gy-6 mb-15 align-items-center">
//         <div className="col-lg-7 order-lg-2">
//           <figure>
//             <img
//               alt=""
//               className="w-auto"
//               src="/img/illustrations/i4.png"
//               srcSet="/img/illustrations/i4@2x.png 2x"
//             />
//           </figure>
//         </div>

//         <div className="col-lg-5 mt-lg-12">
//           <div className="swiper-container dots-closer mb-6">
//             <Carousel grabCursor slidesPerView={1} navigation={false}>
//               {testimonialList2.map((item, i) => (
//                 <TestimonialCard2 key={i} {...item} />
//               ))}
//             </Carousel>
//           </div>
//         </div>
//       </div>

//       {/* ========== clients section ========== */}
//       <div className="px-lg-5">
//         <Clients1 />
//       </div>
//     </div>
//   </section>

//     );
//  }

import { Clients1 } from "components/blocks/clients";
import AccordionList from "components/common/AccordionList";
import Carousel from "components/reuseable/Carousel";
import { TestimonialCard2 } from "components/reuseable/testimonial-cards";
import { processList7 } from "data/process";
import { testimonialList2 } from "data/testimonial-list";

export default function WhyChooseUs() {
  return (
    <section className="wrapper bg-gray">
        <div className="container py-14 py-md-16">
          {/* ========== testimonial section ========== */}
          <div className="row gx-lg-8 gx-xl-12 gy-6 mb-15 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <figure>
                <img
                  alt=""
                  className="w-auto"
                  src="/img/illustrations/i4.png"
                  srcSet="/img/illustrations/i4@2x.png 2x"
                />
              </figure>
            </div>
    
            <div className="col-lg-5 mt-lg-12">
              <div className="swiper-container dots-closer mb-6">
                <Carousel grabCursor slidesPerView={1} navigation={false}>
                  {testimonialList2.map((item, i) => (
                    <TestimonialCard2 key={i} {...item} />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
    
          {/* ========== clients section ========== */}
          <div className="px-lg-5">
            <Clients1/>
          </div>
        </div>
      </section>
  );
}
    