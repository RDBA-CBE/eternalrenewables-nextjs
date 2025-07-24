import animation from "utils/animation";
// GLOBAL CUSTOM COMPONENTS
import VideoPlyr from "components/reuseable/VideoPlyr";
// CUSTOM DATA
import { processList5 } from "data/process";

export default function RiskManagement() {
  return (
    <section className="wrapper bg-orange1 ">
      <div className="container py-5 pt-md-0 pt-lg-0 ">
        <div className="row text-center" style={animation({ name: "slideInUp", delay: "0ms" })}>
          <div className="col-lg-10 mx-auto">
            <div className="mt-lg-n20 mt-xl-n24 position-relative">

              <div className="shape bg-dot red rellax w-16 h-18 d-none d-lg-block" style={{ zIndex: 0, top: "1rem", left: "-3.9rem" }} />
              <div
                className="shape rounded-circle bg-line primary rellax w-18 h-18 d-none d-lg-block"
                style={{ zIndex: 0, bottom: "0rem", right: "-3rem" }}
              />
              <figure>
                <img
                  alt=""
                  className="w-auto rounded"
                  src="/img/how-we-do/risk-managment/image.jpg"
                        
                />
              </figure>
              {/* <VideoPlyr
                options={{ loadSprite: true, clickToPlay: true }}
                source={{ type: "video", sources: [{ src: "/media/movie.mp4" }] }}
              /> */}
            </div>
          </div>
        </div>

        <div className="row text-center mt-8">
          <div className="col-lg-9 mx-auto">
            {/* <h2 className="fs-15 text-uppercase text-muted mb-3">Our Process</h2> */}
            <h3 className="display-3 mb-3 text-center px-xl-10 px-xxl-15 text-white">
            Risk Management
            </h3>

            <div className="row gx-lg-8 gx-xl-12 process-wrapper text-center mt-3 ">
            <p className="text-white">At Eternal Renewables, clear risk allocation and prudent risk management are fundamental to our contract management strategy. We proactively identify, assess and mitigate risks to ensure hassle-free project execution and long-term operational success.</p>
            <p className="text-white">We adopt a ‘EVERYONE SAFE ALWAYS’ workplace culture and maintain an excellent record for ensuring Workplace Health and Safety (WHS). Recognized with ISO 45001 Occupational Health & Safety, we ensure safety is a shared responsibility and work on continuously assessing and improving our safety practices at our worksite. </p>
            <p className="text-white">Safeguarding our ecosystem is at the core of our business operations, that’s why we collaborate with planning authorities, landowners and environmental specialists to ensure our solar projects are designed with sustainability and biodiversity in mind. We hold ISO 14001 Environmental Management Certification, reflecting our commitment towards adopting responsible and sustainable development practices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
