import { Fragment } from "react";
import { Pricing2 } from "components/blocks/pricing";
import  PricingTable  from "components/projectDetail/PricingTable";


export default function Pricing() {
  
  return (
    <Fragment>
       <section className="wrapper bg-soft-primary">
        <div className="container pt-14 pb-18 pt-md-16 pb-md-22 text-center">
          <div className="row">
            <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-muted mb-3">Our Pricing</h2>
              <h3 className="display-4 mb-15 mb-md-6 px-lg-10">
                We offer great prices, premium products and quality service for your business.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <PricingTable />
        </div>
      </section>
    </Fragment>
  );
}