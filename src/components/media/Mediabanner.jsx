import NextLink from "components/reuseable/links/NextLink";
// CUSTOM UTILS
import { slideInDownAnimate } from "utils/animation";

export default function Mediabanner() {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-11 pt-md-13 pb-11 pb-md-19 pb-lg-22 text-center">
        <div className="row">
          <div className="col-lg-12 col-xl-11 col-xxl-10 mx-auto">
            <h1 className="display-1 fs-45 mb-4 px-md-15 px-lg-0" style={slideInDownAnimate("0ms")}>
              Our <span className="underline-3 style-3 primary">Media</span>
            </h1>

            <p className="lead fs-22 lh-sm mb-0 mb-md-3 mx-md-13 mx-lg-10 text-white" style={slideInDownAnimate("300ms")}>
               Stay tuned to this section for the latest insights and stories on sustainable energy solutions, mindful approaches and our industry leadership.
            </p>

            {/* <div style={slideInDownAnimate("600ms")}>
              <NextLink title="Read More" href="#" className="btn btn-lg btn-primary rounded mb-5" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}