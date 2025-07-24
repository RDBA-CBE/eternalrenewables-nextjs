import SafetyAccordianList from "components/whyChooseus/SafetyAccordianList"

export default function Safety() {
  return (
    <section className="wrapper py-5 py-md-10">
        <div className="container py-5 py-md-10">
        <div className="row gy-10 gy-md-0 align-items-center">
      <div className="col-md-8 col-lg-6 mb-0 mb-sm-12 mb-lg-0 offset-lg-1 order-lg-2 position-relative mx-auto">
        <div
          className="shape rounded-circle bg-line primary rellax w-18 h-18"
          style={{ top: "-2rem", right: "-1.9rem" }}
        />

        <div
          className="shape rounded bg-soft-primary rellax d-md-block"
          style={{ width: "85%", height: "90%", left: "-1.5rem", bottom: "-1.8rem" }}
        />

        <figure className="rounded">
          <img src="/img/photos/safety.jpg"  alt="about" />
        </figure>
      </div>

      <div className="col-lg-5">
        {/* <h2 className="fs-16 text-uppercase text-line text-primary mb-3">Why Choose Us?</h2> */}
        <h3 className="display-3-n mb-3 text-green1">Safety</h3>
        <p>We adopt high safety protocols to protect people, prevent harm, and ensure zero leaks across all our operations.</p>
        <SafetyAccordianList />
      </div>
    </div>
        </div>
    </section>
  );
}
