import { Fragment } from "react";
import { ServiceCard3 } from "components/reuseable/service-cards";
// CUSTOM DATA
import { serviceList6 } from "data/service";
import EternalEpcCard from "./EternalEpcCard";
import Target from "icons/lineal/Target";
import Medal from "icons/solid-duo/Medal";
import ClockThree from "icons/lineal/ClockThree";
import color from "utils/color";

export default function EternalEPC() {
     const serviceList = [
      {
        id: 1,
        Icon: '/img/how-we-do/Eternal-EPC/icon-1.png',
        color: color.aqua,
        title: 'Engineering Best Practice',
        description: `Our engineering team consider climatic conditions, terrain, and safety regulations and adopts best practices as per Indian and global standards to ensure resilient infrastructure for optimal energy outcomes. Additionally, we guarantee the design safety of our projects through peer review and compliance with ISO 9001 regulations.`
      },
      {
        id: 2,
        Icon: '/img/how-we-do/Eternal-EPC/icon-2.png',
        color: color.yellow,
        title: 'Outstanding Track Record',
        description: `With over a decade of experience, we have proven expertise in delivering turnkey and bespoke sustainable energy solutions, which includes engineering, design, procurement and construction. We focus on clear technology-driven execution, clear risk allocation and prudent risk management to ensure cost efficiency, reliability and on-time delivery of projects.`
      },
      {
        id: 3,
        Icon: '/img/how-we-do/Eternal-EPC/icon-3.png',
        color: color.red,
        title: 'Positive Impact',
        description: `We focus on creating a positive impact on our ecosystem and promoting biodiversity and work closely with planning authorities, landowners and environmental specialists, prioritizing environmental stewardship. We have successfully increased the biodiversity across our solar farms by 24%.`
      },
      
    ];
  return (
    <Fragment>
      <section className="wrapper bg-soft-primary mt-5  mb-lg-21 mb-xl-26">
        <div className="container pt-10 pb-5 pb-lg-10">
        <div className="row text-center  mb-5">
        <div className="col-md-12 offset-md-1 col-lg-10 ">
          {/* <h2 className="fs-15 text-uppercase text-muted mb-3">App Features</h2> */}
          <h3 className="display-3 px-xxl-11 text-white">
          Eternal EPC
          </h3>
          <h4 className="text-white">Adhering to global best practices and using Tier-one equipment for optimal performance and long-term success.</h4>
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-8 mb-5">
        {serviceList.map(({ Icon, color, ...item }) => (
          <div className="col-md-6 col-lg-4 " key={item.id}>
            <EternalEpcCard {...item} Icon={Icon} />
          </div>
        ))}
      </div>
        </div>
      </section>
    </Fragment>
  );
}
