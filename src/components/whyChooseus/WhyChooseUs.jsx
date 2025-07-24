import AccordionList from "components/common/AccordionList";
import { processList7 } from "data/process";

export default function WhyChooseUs() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
    <div className="col-lg-7 order-lg-2">
      <figure>
        <img
          alt=""
          className="w-auto"
          src="/img/illustrations/i2.png"
          srcSet="/img/illustrations/i2@2x.png 2x"
        />
      </figure>
    </div>

    <div className="col-lg-5">
      <h2 className="fs-15 text-uppercase text-line text-primary mb-3">Why Choose Us?</h2>
      <h3 className="display-5 mb-7">A few reasons why our valued customers choose us.</h3>
      <AccordionList />
    </div>
  </div>
  );
}
