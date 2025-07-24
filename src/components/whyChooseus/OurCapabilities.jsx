import { Fragment } from "react";
import { ServiceCard2 } from "components/reuseable/service-cards";
import CapabilityCard from "components/whyChooseus/CapabilityCard"
// CUSTOM DATA
import { serviceList3 } from "data/service";

export default function OurCapabilities() {

     const CapabilitiesList = [
      {
        id: 1,
        linkUrl: '#',
        title: 'Landowner Engagement & Agreements',
        icon: 'uil-phone-volume',
        title: 'Landowner Engagement & Agreements',
        // icon: 'uil-phone-volume',
        icon: '/img/photos/icon-1.png',
        description: `We understand priorities, address the concerns of landowners and take necessary measures to lower environmental impact, this enables us to develop strong partnerships and maximize local economic benefits.`
      },
      {
        id: 2,
        linkUrl: '#',
        title: 'Development',
        icon: 'uil-shield-exclamation',
        title: 'Development',
        icon: '/img/photos/icon-2.png',
        description: `We can secure relevant development, environmental and cultural heritage approvals, and finalize grid connection arrangements to foster community engagement and create job opportunities for local communities.`
      },
      {
        id: 3,
        linkUrl: '#',
        title: 'Power Plant Design & Execution',
        icon: 'uil-laptop-cloud',
        title: 'Power Plant Design & Execution',
        icon: '/img/photos/icon-3.png',
        description: `We oversee every aspect of power plant development from conceptual design to procurement and construction to ensure optimal efficiency and reliability including EPC and O&M agreements.`
      },
      {
        id: 4,
        linkUrl: '#',
        title: 'Power Purchase Agreements (PPAs)',
        icon: 'uil-chart-line',
        title: 'Power Purchase Agreements (PPAs)',
        icon: '/img/photos/icon-4.png',
        description: `We offer flexible contract structures, like variable, flat and firm supply contracts, storage solutions and behind-the-meter energy solutions and craft customized agreements to meet the requirements of utilities and corporate consumers.`
      },
      {
        id: 5,
        linkUrl: '#',
        title: 'Regulatory Authorizations',
        icon: 'uil-phone-volume',
        title: 'Regulatory Authorizations',
        icon: '/img/photos/icon-5.png',
        description: `We have extensive experience in navigating regulatory frameworks. We also implement relevant clean energy policies and carbon reduction initiatives for solar farms to operate in the Indian energy sector.`
      },
      {
        id: 6,
        linkUrl: '#',
        title: 'Financing',
        icon: 'uil-shield-exclamation',
        title: 'Financing',
        icon: '/img/photos/icon-6.png',
        description: `We can secure the necessary finances for infrastructure and execute comprehensive assessment and verification before finalizing the project.`
      },
      {
        id: 7,
        linkUrl: '#',
        title: 'Construction Management',
        icon: 'uil-laptop-cloud',
        title: 'Construction Management',
        icon: '/img/photos/icon-7.png',
        description: `We adhere to safety and quality guidelines during construction and ensure the project is delivered on time and within your budget.`
      },
      {
        id: 8,
        linkUrl: '#',
        title: 'Asset Management',
        icon: 'uil-chart-line',
        title: 'Asset Management',
        icon: '/img/photos/icon-8.png',
        description: `We ensure optimal power plant performance and handle all market-facing aspects, including energy trading and settlements.`
      }
    ];
    

  return (
    
        <section className="wrapper bg-orange1 mt-5 mt-md-10 mb-5 mb-md-10">
        <div className="container pt-5 pt-md-10 pb-5 pb-md-10">
        <div className="row">
        <div className="col-lg-8 col-xl-7 col-xxl-6">
          {/* <h2 className="fs-16 text-uppercase text-line text-primary mb-3">What We Do?</h2> */}
          <h3 className="display-3-n text-white mb-3">
          Our Capabilities
          </h3>
        </div>
      </div>

      <div className="row gx-md-8 gy-8 ">
        {CapabilitiesList.map((item) => (
          <CapabilityCard
            {...item}
            key={item.id}
            iconBoxClassNames="icon btn btn-block btn-lg border pe-none mb-6"
          />
        ))}
      </div>
        </div>
        </section>
 
     

  );
}
