import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Quality Plants",
    image: "/img/what-we-do/quality.png",
    description: "We use cutting-edge technology and precision engineering and adopt rigid quality control to design and build reliable and durable renewable energy plants that meet the highest industry standards for efficiency and quality."
  },
  {
    id: 2,
    title: "Holistic Approach",
    image: "/img/what-we-do/holistic-approach.png",
    description: "We consider every aspect of a project, like site selection, engineering, financing, long-term asset management, environmental, social, and economic factors, to create energy solutions that are both sustainable and profitable."
  },
  {
    id: 3,
    title: "Business Relationship",
    image: "/img/what-we-do/business-rela.png",
    description: "Our relationship with our stakeholders is built on trust. We work closely with landowners, investors, utilities, and corporate clients to develop tailored energy solutions that align with their unique goals and needs."
  },
  {
    id: 4,
    title: "Market Knowledge",
    image: "/img/what-we-do/market-know.png",
    description: "We have over 25 years of solid experience in the renewable energy sector and stay ahead of industry trends, regulatory changes, and market dynamics. Our deep expertise in the field enables us to identify the best opportunities, optimize project performance, and maximize financial returns for our partners."
  },
  {
    id: 5,
    title: "Energy Storage",
    image: "/img/what-we-do/enegry-storage.png",
    description: "We understand the importance of reliable energy storage systems and use advanced technologies to enhance grid stability, optimize energy distribution and provide reliable backup power.  This allows us to ensure a continuous, flexible and resilient energy supply for our customers with our solar and wind energy solutions."
  },
  // {
  //   id: 6,
  //   title: "Social Media Management",
  //   image: "/img/illustrations/ni6.png",
  //   description: "Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit."
  // }
];

export default function ServiceList() {
  return (
    <section className="bg-light">
      <div className="container pt-8 pt-md-10 pb-5 pb-md-5  ">
        <div className="row d-flex align-items-start gy-10">
          <div className="col-lg-5 position-lg-sticky" style={{ top: "8rem" }}>
            {/* <h2 className="fs-16 text-uppercase text-muted mb-3">What We Do?</h2> */}
            <h3 className="display-3 ls-xs mb-3 text-green1">
            From Solar Panels to Smart Grids – We Do It All
            </h3>
            <p className="mb-0 mb-md-7">
            We help individuals and businesses cut costs, reduce carbon and gain energy independence.
            </p>
            {/* <Link href="#" className="btn btn-primary">
              More Details
            </Link> */}

             <figure className="rounded mb-6">
                           <img
                            alt=""
                            className="img-fluid"
                            src="/img/home/why-choose-us.jpg"
                            srcSet="/img/home/why-choose-us.jpg 2x"
                          /> 
                         
                        </figure>
          </div>
          <div className="col-lg-6 ms-auto mt-6">
            {services.map((service) => (
              <div className="card mb-6 bg-orange1" key={service.id}>
                <div className="card-body d-flex flex-row ">
                  <div>
                    <img src={service.image} className="w-13 me-5" alt={service.title} />
                  </div>
                  <div>
                    <h3 className="fs-22 ls-xs mb-2 text-white">{service.title}</h3>
                    <p className="mb-0 text-white">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
