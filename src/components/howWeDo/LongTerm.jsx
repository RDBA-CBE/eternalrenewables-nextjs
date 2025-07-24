import NextLink from "components/reuseable/links/NextLink";
import { ProcessList1 } from "components/reuseable/process-list";
// CUSTOM DATA
import { processList1 } from "data/process";
import LongTermList from "./LongTermList";

export default function LongTerm() {
     const processList1 = [
      {
        no: "1",
        className: "me-lg-6",
        title: "",
        subtitle: "Anticipating long-term challenges and proactively mitigating risks."
      },
      {
        no: "2",
        title: "",
        className: "ms-lg-13 mt-6",
        subtitle: "Integrating development, construction, operations and maintenance processes for a smooth transition through each project phase."
      },
      {
        no: "3",
        title: "",
        className: "mx-lg-6 mt-6",
        subtitle: "We use advanced analytics to ensure sustainable and reliable performance of our energy systems."
      }
    ];
  return (
    <section className="wrapper">
        <div className="container py-5 py-md-10">
        <div className="row gx-md-8 gx-xl-12 gy-10  align-items-center">
      <div className="col-lg-6 order-lg-2">
        {processList1.map((item) => (
          <LongTermList shadow {...item} key={item.no} />
        ))}
      </div>

      <div className="col-lg-6">

        {/* <h2 className="fs-16 text-uppercase text-muted mb-3">Our Strategy</h2> */}
        <h3 className="display-3-n mb-3 text-green1">Long-term Management</h3>
        
        <div className="col-12 mt-8">
                    <figure className="rounded ">
                    <img src="/img/how-we-do/Long-term-management/image.jpg"  alt="G 11" />
                    </figure>
                </div>
        <p className="pt-5">At Eternal Renewables, we build, manage and operate solar farms to ensure long-term success. We focus on:</p>

        {/* <p className="mb-6">
        
        </p> */}

      

        {/* <NextLink href="#" title="Learn More" className="btn btn-primary rounded-pill mb-0" /> */}
      </div>
    </div>
        </div>
    </section>
  );
}
