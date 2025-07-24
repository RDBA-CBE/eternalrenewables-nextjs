import NextLink from "components/reuseable/links/NextLink";
// CUSTOM UTILS
import { slideInDownAnimate } from "utils/animation";

export default function BlogBanner({title}) {
  return (
    <section className="wrapper bg-soft-primary ">
      <div className="container py-5 text-center">
        <div className="row">
          <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
            <h1 className="display-1 fs-45  px-md-15 px-lg-0" style={slideInDownAnimate("0ms")}>
              {title}
            </h1>

            {/* <p className="lead fs-22 lh-sm mb-0 mb-md-3 mx-md-13 mx-lg-10" style={slideInDownAnimate("300ms")}>
              We are a creative company that focuses on long term relationships with customers.
            </p> */}

            {/* <div style={slideInDownAnimate("600ms")}>
              <NextLink title="Read More" href="#" className="btn btn-lg btn-primary rounded mb-5" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}