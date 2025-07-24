import NextLink from "components/reuseable/links/NextLink";

export default function WhyChooseBanner() {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pt-md-14 pb-14 pb-md-2">
        <div className="row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-13">
          <div className="col-lg-6">
            <h1 className="fs-45 lh-xxs mb-4 text-white">Why <span className="underline-3 style-3 primary">Choose </span>Us</h1>
            <h4 className="my-3 text-white">100% success rate in navigating regulations in developing large-scale solar power projects outside the green belt.</h4>
          </div>

          <div className="col-lg-6">
            <p className="lead fs-20 my-3 text-white">
            We stay true to our commitments and ensure excellence at each stage of our development and installation process. Our solar development projects are designed with precision, sustainability and long-term value benefitting all stakeholders.
            </p>
            
          </div>
        </div>

        <div className="position-relative">
          <div className="shape bg-dot primary rellax w-17 h-21" style={{ top: "-2.5rem", right: "-2.7rem" }} />

          <figure className="rounded mb-md-n20">
            {/* <img src="/img/photos/why-choose-us-bg.jpg" srcSet="/img/photos/about18@2x.jpg 2x" alt="About" /> */}
            <video loop muted autoPlay playsInline id="1187841"  src="/media/why-choose-vid.mp4" />
          </figure>
        </div>
      </div>
    </section>
  );
}
