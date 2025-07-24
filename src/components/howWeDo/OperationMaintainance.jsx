import NextLink from "components/reuseable/links/NextLink";

export default function OperationMaintainance() {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay mb-5 "
      style={{ backgroundImage: "url(/img/how-we-do/opreation-management/image.jpg)" }}>
      <div className="container py-18">
        <div className="row text-center">
          <div className="col-lg-11 col-xl-10 col-xxl-8 mx-auto">

            <h3 className="display-3 mb-3 text-white px-lg-5 px-xxl-0">
            Operation & Maintainance
            </h3>
            <h2 className="fs-16  text-white mb-3">At Eternal Renewables, we believe that our commitment extends far beyond simply installing renewable energy systems. We ensure that your systems perform at their best throughout the entire year. <br></br><br></br>Our comprehensive management services include everything from real-time monitoring and performance optimization to proactive maintenance and repairs. With us, you can rest easy knowing that your business will enjoy reliable and efficient power for the long term.</h2>

            {/* <NextLink href="#" title="Join Us" className="btn btn-white rounded-pill mb-0 text-nowrap" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
