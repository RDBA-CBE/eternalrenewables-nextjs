import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Tiles11 } from "components/elements/tiles";
import { Counter4 } from "components/reuseable/counter";
import NextLink from "components/reuseable/links/NextLink";
import Target from "icons/lineal/Target";
import BarChart from "icons/lineal/BarChart";
import Megaphone from "icons/lineal/Megaphone";
import SettingsThree from "icons/lineal/SettingsThree";
// CUSTOM DATA
import { abouts } from "data/demo-32";

export default function EternalEnergy() {
   const serviceList2 = [
          {
            id: 1,
            title: "Identify and Survey",
            Icon: '/img/how-we-do/External-energy/icon-1.png',
            description: `We carefully select low-grade farmland, conduct feasibility studies and site assessments and engage with landowners to identify the most suitable locations for our energy projects.`
          },
          {
            id: 2,
            title: "Consent Process",
            Icon: '/img/how-we-do/External-energy/icon-2.png',
            description: `We work closely with the local authorities, planning departments and community representatives and consider environmental impact while fine-tuning our project plans to gain necessary approvals.`
          },
          {
            id: 3,
            title: "Erection Process",
            Icon:'/img/how-we-do/External-energy/icon-3.png',
            description: `We meticulously oversee every aspect of the construction phase, ensuring the infrastructure is built to meet the highest standards of quality. Our team has the expertise to handle engineering, procurement and construction with precision, delivering cost-effective, durable, and high-performance renewable energy farms.`
          },
          {
            id: 4,
            Icon: '/img/how-we-do/External-energy/icon-4.png',
            title: "Commissioning and Grid Connection",
            description: `Once construction is completed, we rigorously test and commission our solar plants as per regulatory and performance standards. We also provide grid connections to integrate renewable energy into power supply lines to deliver clean, reliable electricity to industries and communities.`
          }
        ];
  return (
    <section className="wrapper">
        <div className="container">
        <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-5 mb-md-10">
            <div className="col-lg-6">
            <div className="row gx-md-5 gy-5">
                {/* <div className="col-md-6">
                    <figure className="rounded">
                    <img src="/img/photos/g12.jpg" srcSet="/img/photos/g12@2x.jpg 2x" alt="G 12" />
                    </figure>
                </div>

                <div className="col-md-6 align-self-end">
                    <figure className="rounded">
                    <img src="/img/photos/g13.jpg" srcSet="/img/photos/g13@2x.jpg 2x" alt="G 13" />
                    </figure>
                </div> */}

                <div className="col-12">
                    <figure className="rounded mx-md-5">
                    <img src="/img/how-we-do/External-energy/external-enegry.jpg"  alt="G 11" />
                    </figure>
                </div>
                </div>
            </div>

            <div className="col-lg-6 ">
            {/* <h2 className="fs-16 text-uppercase text-primary mb-3">Who Are We?</h2> */}
            <h3 className="display-3 mb-3 text-green1 ">Eternal Energy</h3>
            <p className="mb-2 mb-md-6">
              We meticulously oversee each phase of the development process with precision to ensure efficiency and long-term value across our supply chain. 
            </p>

            
            </div>
        </div>

      
       <div className="row gx-lg-8 gx-xl-12 gy-6 mb-5 mb-md-10">
                    {serviceList2.map(({ id, Icon, title, description }) => (
                      <div className="col-md-6 " key={id}>
                        <div className="d-flex flex-row bg-orange1 py-5 px-3 h-100 rounded">
                          <div>
                            <div className="icon btn btn-block pe-none  me-4 w-10 h-10">
                            <img src={Icon} alt={title} className="mb-3 img-fluid" style={{ maxHeight: '40px' }} />
                            </div>
                          </div>
                          <div>
                          <h4 className="text-white">{title}</h4>
                          <p className="mb-0 text-justify text-white">{description}</p>
                          </div>
                        </div>
                       
                       
                      </div>
                    ))}
                </div>

        </div>
    </section>
  );
}


