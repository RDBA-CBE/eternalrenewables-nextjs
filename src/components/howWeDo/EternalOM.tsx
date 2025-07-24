import { Fragment } from "react";

// =================================================================
type ItemProps = { no: string; title: string; className?: string ;description:string};
// =================================================================

const Item = ({ no, title, className = "" ,description}: ItemProps) => {
  return (
    <div className={className}>
      <span className="fs-60 lh-1 mb-4 fw-normal text-orange1 ">{no}</span>
      {/* <h4 className="fs-20">{title}</h4> */}
      <p className="mb-0 px-xl-7 mt-2 text-white">
        {description}
      </p>
    </div>
  );
};

export default function EternalOM() {
  return (
    <Fragment>
      <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pb-10">
      <div className="row text-center">
        <div className="col-md-12 col-lg-9 mx-auto position-relative">
          <img
            data-delay="1800"
            src="/img/svg/doodle5.svg"
            className="w-15 position-absolute d-none d-lg-block"
            style={{ bottom: "-60%", right: "10%" }}
            alt=""
          />

          {/* <img
            data-delay="1800"
            src="/img/svg/doodle6.svg"
            className="h-15 position-absolute d-none d-lg-block"
            style={{ top: "-40%", left: "-5%" }}
            alt=""
          /> */}

          {/* <h2 className="fs-16 text-uppercase text-muted mb-3">How It Works</h2> */}
          <h3 className="display-3 mb-3 text-white px-xl-6">
          Eternal O & M
          </h3>
          <h4 className="text-white">Maximizing the performance of your photovoltaic systems and increasing your ROI</h4>
          <p className="text-white">At Eternal Renewables, we ensure your solar assets sustain long-term efficiency and profitability. Our Operations & Maintenance (O&M) services are designed to safeguard system performance, prevent failures and optimize returns through:</p>
        </div>
      </div>

      <div className="row">
        <div className="col-xxl-11 mx-auto">
          <div className="row gy-10 gy-lg-0 text-center d-flex align-items-center">
            <div className="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0">
              <figure className="mx-auto mb-5">
                <img src="/img/how-we-do/Eternal-O&M/center-img.png"  alt="" />
              </figure>
            </div>

            <div className="w-100 d-lg-none" />

            <div className="col-md-6 col-lg-4 order-lg-first">
              <Item no="01" title="Download Application" className="mb-8" description="Continuous surveillance to detect and resolve irregularities in performance." />
              <Item no="02" title="Quick Registration" description="Proactive inspections to minimize downtime and ensure optimal output." />
            </div>

            <div className="col-md-6 col-lg-4">
              <Item no="03" title="Track Your Spending" className="mb-8" description="Identify inefficiencies and implement strategies to enhance energy yield."/>
              <Item no="04" title="Have Total Control" description="Provide stakeholders with real-time insights and detailed reports."/>
            </div>

            <h4 className="text-white">We ensure our partners have stable, high-yield energy production throughout the year with proactive asset management and maintenance.</h4>
          </div>
        </div>
        
      </div>

      
      </div>
      </section>
   
    </Fragment>
  );
}
