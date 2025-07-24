import { Counter1 } from "components/reuseable/counter";
// CUSTOM DATA
import { factList5 } from "data/facts";

export default function Facts7() {
  return (
    <section className="wrapper bg-white">
      <div className="container py-10 pt-md10 pb-md-21">
        <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-2 text-green align-items-center">
          <div className="col-lg-4">
            {/* <h3 className="display-4 text-green mb-3 pe-xxl-15">We are proud of our projects</h3> */}
            <p className="lead fs-lg mb-0 pe-xxl-10">We bring solutions to make life easier for our customers.</p>
          </div>

          <div className="col-lg-8 mt-lg-2">
            <div className="row align-items-center counter-wrapper gy-6 text-center">
              {factList5.map(({ id, title, amount }) => (
                <Counter1 key={id} title={title} number={amount} titleColor="text-green1" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
