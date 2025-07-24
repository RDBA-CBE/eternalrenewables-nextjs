import { Fragment } from "react";
// CUSTOM DATA
import { processList2 } from "data/process";

export default function ProjectDevelopment() {
   const processList2 = [
    {
      no: "01",
      title: "",
      subtitle: "Feasibility studies and yield analysis to evaluate land potential and conduct in-depth technical assessments."
    },
    {
      no: "02",
      title: "",
      subtitle: "Land procurement and negotiations to secure suitable sites to establish successful projects."
    },
    {
      no: "03",
      title: "",
      subtitle: "Financial and regulatory compliance to ensure eligibility under national tariffs, PPAs, and incentive programs."
    },
    {
      no: "04",
      title: "",
      subtitle: "Grid connection and load flow analysis to assess power flow and grid connection points for hassle-free integration."
    },
    {
      no: "05",
      title: "",
      subtitle: "Environmental and construction approvals to manage the entire licensing process with regulatory authorities."
    }
  ];
  return (
    <Fragment>
      <section className="wrapper">
        <div className="container-fluid py-5 py-md-10">
            <div className="row justify-content-center">
              <div className="col-11 ">

             
              <div className="row justify-content-center  mb-8">
                <div className="col-lg-10">
                  <h2 className="display-3 text-green1 mb-3">Project Development</h2>
                  <p className=" mb-0">
                    At Eternal Renewables, we handle every aspect of sustainable energy project development with a multidisciplinary team which includes technical, commercial and legal professionals to deliver bankable and high-performing Solar PV farms.
                  </p>
                </div>
              </div>
              <div className="row gx-lg-8 gx-xl-12 gy-6 process-wrapper line justify-content-start justify-content-lg-center">
      
                {processList2.map(({ no, title, subtitle }, i) => {
                  const iconColor = i === 1 ? "bg-green1 text-white" : "bg-green1 text-white";

                  return (
                    <div className="col-md-6 col-lg-2 mt-2 pb-0" key={no}>
                      <span className={`icon btn btn-circle btn-lg pe-none mb-4 ${iconColor}`}>
                        <span className="number">{no}</span>
                      </span>

                      <h4 className="mb-1 text-blue">{title}</h4>
                      <p>{subtitle}</p>
                    </div>
                  );
                })}

                <div className="col-lg-10 mt-2">
                      
                <h4>
                  We stay updated on the local and global regulations and trends. This allows us to navigate complex regulatory landscapes, ensuring smooth project execution across India and beyond.
                </h4>
              </div>
            </div>

        
                
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
