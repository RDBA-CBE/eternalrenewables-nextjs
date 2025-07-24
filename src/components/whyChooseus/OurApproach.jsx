import { ServiceCard1 } from "components/reuseable/service-cards";
import Search from 'icons/lineal/Search';
import Browser from 'icons/lineal/Browser';
import ChatTwo from 'icons/lineal/ChatTwo';
import Megaphone from 'icons/lineal/Megaphone';
import { LinkType } from "types/demo-1";
import ApproachCard from "components/whyChooseus/ApproachCard"


export default function OurApproach() {

 const ApproachList = [
      {
        id: 1,
        link: '#',
        icon: '/img/why-choose-us/icon-1.png',
        title: 'Business Strategy',
        linkText: 'Learn More',
        linkType: LinkType.yellow,
        description: `We start by understanding your business objectives and ensure your energy infrastructure is strategically aligned to meet your long-term goals. We help you realize your vision of lowering your carbon footprint, and drive growth.`
      },
      {
        id: 2,
        link: '#',
        icon: '/img/why-choose-us/icon-2.png',
        title: 'Development, Planning & Design',
        linkText: 'Learn More',
        linkType: LinkType.red,
        description: `We meticulously plan your energy projects, secure the necessary funding and work in partnership with relevant experts to ensure the best outcomes.`
      },
      {
        id: 3,
        link: '#',
        icon: '/img/why-choose-us/icon-3.png',
        linkType: LinkType.green,
        title: 'Construction Excellence',
        linkText: 'Learn More',
        description: `We have the capability to execute complex construction projects with precision, within your budget and timeline. With a team of experienced professionals, we adopt a hands-on approach and ensure transparency in our communication and transactions through each stage of the process.`
      },
      {
        id: 4,
        link: '#',
        icon: '/img/why-choose-us/icon-4.png',
        linkType: LinkType.blue,
        title: 'Optimization of Assets',
        linkText: 'Learn More',
        description: `We have the expertise to assess your built environment and identify potential opportunities to build infrastructure for your energy projects as per your specifications and business objectives so you can focus on your core business.`
      }
    ];
  return (
    <section className="wrapper bg-light pb-5 ">
      <div className="container pt-5 pt-md-10 pb-5 pb-md-10">
        <div className="row text-center">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            {/* <h2 className="fs-16 text-uppercase text-muted mb-3">What We Do?</h2> */}
            <h3 className="display-3-n mb-3 px-xl-10 text-green1">
             Our Approach
            </h3>
            <p>At Eternal Renewables we adopt a holistic and results-driven approach to deliver world-class renewable energy projects. From initial planning to long-term asset optimization, we have the expertise and ensure transparency to deliver innovative and high-impact solutions tailored to your business needs.</p>
          </div>
        </div>

        <div className="position-relative">
          <div
            className="shape rounded-circle bg-soft-blue rellax w-16 h-16 bg-green1"
            style={{ zIndex: 0, right: "-2.2rem", bottom: "-0.5rem" }}
          />

          <div
            className="shape bg-dot primary rellax w-16 h-17"
            style={{ zIndex: 0, top: "-0.5rem", left: "-2.2rem" }}
          />

          <div className="row gx-md-5 gy-5 text-center approach-project">
            {ApproachList.map((item) => (
              <ApproachCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                linkUrl={item.link}
                linkType={item.linkType}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
