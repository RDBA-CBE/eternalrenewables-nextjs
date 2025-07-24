import { Tiles3 } from "components/elements/tiles";
import NextLink from "components/reuseable/links/NextLink";

export default function StrongRelationship() {
  return (
        <section className="wrapper bg-light">
             <div className="container pt-10 pt-md-21 pb-3">
            <div className="row gy-10 gx-lg-8 gx-xl-12  align-items-center">
            <div className="col-lg-7 position-relative">
                <Tiles3 />
            </div>

            <div className="col-lg-5">
                <h2 className="display-3-n mb-3 text-green1">Strong Relationship</h2>
                {/* <p className="lead fs-lg">
                Let’s make something great together. We are trusted by over 5000+ clients. Join them by
                using our services and grow your business.
                </p> */}

                <p className="text-dark fw-normal">
                We maintain strong relationships with experienced contractors who have the expertise to deliver the best outcomes for large-scale solar energy projects with precision. We adopt mindful development approaches to ensure the well-being of the local wildlife and farm animals that may share the site.
                </p>

                {/* <NextLink title="Join Us" href="#" className="btn btn-primary rounded mt-2" /> */}
            </div>
            </div>
        </div>
        </section>
  );
}
