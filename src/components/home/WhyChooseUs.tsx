import { auto } from "@popperjs/core";
import NextLink from "components/reuseable/links/NextLink";
import VideoPlyr from "components/reuseable/VideoPlyr";

export default function WhyChooseUs() {
  return (
    <>
    <style>
                {`
                .hm-WhyChooseUs::before {
                    content: '';
                    position: absolute;
                    top: 0px;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url(img/home/why-choose-us.png) #0a1905 no-repeat ;
                    z-index: -1;
                    
                }
                `}
            </style>
   
    <section className="wrapper hm-WhyChooseUs" style={{position:"relative",zIndex:"100"}}>
      <div className="container  py-10 pb-xl-18 pt-md-12">
        <div className="row text-center mb-10">
          <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto">
            <h2 className="fs-16 text-uppercase mb-3 text-white">Trusted partner for green energy </h2>
            <h3 className="display-3-n px-xl-10 mb-0">
              Why Choose Us
            </h3>
          </div>
        </div>

        <div className="row gx-lg-0 gy-10  align-items-center">
          <div className="col-lg-6">
            <figure className="rounded mb-0">
              {/* <img
                alt=""
                className="img-fluid"
                src="/img/home/why-choose-us.jpg"
                srcSet="/img/home/why-choose-us.jpg 2x"
              /> */}
              {/* <video loop muted autoPlay playsInline id="1187841"  src="/media/banner-vid1.mp4" /> */}
              <VideoPlyr
                options={{  clickToPlay: true }}
                source={{ type: "video", sources: [{ src: "/media/banner-vid1.mp4" }] }}
            />
            </figure>
          </div>

          <ColumnTwo title="Affordable. Scalable. Eco-friendly" className="ms-auto" />
        </div>

        {/* <div className="row gx-lg-0 gy-10 mb-15 mb-md-17 align-items-center">
          <div className="col-lg-6 order-lg-2 ms-auto">
            <figure className="rounded mb-0">
              <img
                alt=""
                className="img-fluid"
                src="/img/illustrations/ui1.png"
                srcSet="/img/illustrations/ui1@2x.png 2x"
              />
            </figure>
          </div>

          <ColumnTwo title="Mobile Development" />
        </div>

        <div className="row gx-lg-0 gy-10 align-items-center">
          <div className="col-lg-6">
            <figure className="rounded mb-0">
              <img
                alt=""
                className="img-fluid"
                src="/img/illustrations/ui5.png"
                srcSet="/img/illustrations/ui5@2x.png 2x"
              />
            </figure>
          </div>

          <ColumnTwo title="SEO Optimization" className="ms-auto" />
        </div> */}
      </div>
    </section>

    </>
  );
}

type ColumnTwoProps = { title: string; className?: string };

const ColumnTwo = ({ title, className = "" }: ColumnTwoProps) => {
  // list data
  const list = [
    "We Specialise in latge-scale renewable energy.",
    "Particularly Utilty Scale Solar PV and storage projects.",
    "Our Focus is megawatt-scale power generation."
  ];

  return (
    <div className={`col-lg-5 ${className}`}>
      <h3 className="fs-28 mb-3 text-white">{title}</h3>
      <p className="text-white fw-normal">
      With the increasing awareness of the need for renewable energy solutions to reduce carbon emissions and ensure energy security, the world is rapidly moving towards clean energy solutions. At Eternal Renewables, we are committed to developing high-quality clean energy and energy storage solutions to help replace fossil fuels and address climate change. We empower communities with reliable, sustainable energy solutions to speed up the transition to a greener future.
       {/* <br/><br/>We understand that industries often face difficulties in integrating solar, wind and hydropower with a grid for a stable and dependable power supply. This is where we step in. With cutting-edge technology and sustainable development approaches, we have the expertise to create energy solutions that are futuristic and efficient. */}
      </p>

      {/* <ul className="icon-list bullet-bg bullet-soft-primary">
        {list.map((item) => (
          <li  key={item}> */}
            {/* <i className="uil uil-check text-blue" /> */}
            {/* <i className="uil uil-angle-double-right text-blue fs-22" />
            <span className="text-dark fw-normal">{item}</span>
          </li>
        ))}
      </ul> */}

      <NextLink title="Know More" href="/whychooseus" className="btn btn-soft-primary rounded-pill mt-2 mb-0" />
    </div>
  );
};
