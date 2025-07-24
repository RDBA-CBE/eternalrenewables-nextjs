import Carousel from "components/reuseable/Carousel";
import { TestimonialCard2 } from "components/reuseable/testimonial-cards";
// CUSTOM DATA
import { testimonialList2 } from "data/testimonial-list";

export default function ExpertTeam() {
  return (
    <section className="wrapper bg-light pt-5 pb-5 ">
      <div className="container py-5 bg-pale-primary rounded-xl">
        <div className="row gx-lg-8 gx-xl-0 align-items-center">
          <div className="col-md-5 col-lg-5 col-xl-4 offset-xl-1 d-none d-md-flex position-relative align-items-center justify-content-center">
            <figure>
              <img src="/img/photos/expert-team.png"  alt="" style={{width:"100%"}} />
            </figure>
          </div>
          <div className="col-md-7 col-lg-6 col-xl-6 col-xxl-5 offset-xl-1">
            <div className="swiper-container dots-start dots-closer mt-md-10 mb-md-15">
              <div className="icon icon-top fs-lg text-center">
                <div className="blockquote-details justify-content-center text-center">
                  <div className="info ps-0">
                    <h2 className="mb-3 display-3-n text-white">Expert Team</h2>  
                  </div>
                </div>
                <p className="text-white">We have a strong team of experienced professionals who bring in a wealth of knowledge to devise plans for energy projects, ensuring on-time delivery to maximize success. Additionally, we work in partnership with experienced consultants (lawyers, surveyors and electrical specialists) to ensure the project meets the highest standards of quality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
