import Carousel from "components/reuseable/Carousel";
import { TestimonialCard2 } from "components/reuseable/testimonial-cards";
// CUSTOM DATA
import { testimonialList2 } from "data/testimonial-list";

export default function EternalEPC() {
  return (

      <section className="wrapper bg-light angled upper-end lower-start EternalEPC">
          <div className="container pt-5 pt-md-10 pb-5 pb-md-10 position-relative">
            {/* ========== client reviews section ========== */}
           <div className="position-relative ">
                 <div
                   className="shape rounded-circle bg-line primary rellax w-18 h-18 "
                   style={{ zIndex: 0, top: "-2rem", right: "-2.7rem" }}
                 />
           
                 <div
                   className="shape rounded-circle bg-soft-primary rellax w-18 h-18"
                   style={{ zIndex: 0, left: "-3rem", bottom: "-1rem" }}
                 />
           
                   <div className={`card shadow-lg bg-green1`}>
                       <div className="row gx-0">
                         <div
                           style={{ backgroundImage: "url(/img/photos/external-epc.jpg)" }}
                           className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start "
                         />
                 
                         <div className="col-lg-6">
                           <div className="p-10 p-md-11 p-lg-13">
                             <div className="swiper-container dots-closer mb-4">
                             <div className="icon icon-top fs-17 text-center">
                                <div className="blockquote-details justify-content-center text-center">
                                    <div className="info ps-0">
                                    <h2 className="mb-3 display-3-n text-white">Eternal EPC</h2>
                                    {/* <p className="mb-0">{designation}</p> */}
                                    </div>
                                </div>
                                <p className="text-white">We integrate mindful development approaches and cutting-edge technologies to ensure the timely delivery of end-to-end renewable energy projects that meet the highest standards of quality and are cost-efficient. </p>

                              
                            </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
               </div>
          </div>
        </section>
    
  );
}
