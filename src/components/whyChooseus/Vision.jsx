import NextLink from "components/reuseable/links/NextLink";

export default function Vision() {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay mt-5 mt-md-10 mb-5 mb-md-10"
      style={{ backgroundImage: "url(/img/photos/vision.jpg)" }}>
      <div className="container py-18">
        <div className="row text-center">
          <div className="col-lg-13 col-xl-12 col-xxl-10 mx-auto">

          <h2 className="mb-3 display-3-n text-white">Eternal EPC</h2>
          <h4 className="fs-20  text-white mb-3">We aspire to become the leading provider of competitive and flexible clean energy solutions using diverse power generation and energy storage technologies as per customer requirements. </h4>

            {/* <NextLink href="#" title="Join Us" className="btn btn-white rounded-pill mb-0 text-nowrap" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
