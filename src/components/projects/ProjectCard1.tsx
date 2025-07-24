import { Fragment } from "react";
import Link from "next/link";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";

export default function ProjectCard1() {
  return (
    <Fragment>
      <section className="wrapper">
        <div className="container pt-10 pt-lg-15 pb-5">
          {/* <div className="row align-items-center mb-10 ">
            <div className="col-md-8 col-lg-9 col-xl-8 col-xxl-7">
              <h2 className="display-3 mb-0">Check out some of my latest projects.</h2>
            </div>

            <div className="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
              <Link href="/contactus" className="btn btn-lg btn-primary rounded-pill py-2">
              Contact Us <i className="uil uil-arrow-up-right" />
              </Link>
            </div>
          </div> */}

          {/* <div className="card bg-soft-violet mb-10">
            <div className="card-body  py-12">
              <div className="row gy-10 align-items-center">
                <div className="col-lg-4  offset-lg-1"> */}
                  {/* <div className="post-category mb-3 text-violet">Web Design</div> */}
                  {/* <h3 className="h1 fs-28 post-title mb-3 text-violet">Ground-Mounted Solar Solutions</h3>
                  <p>
                  Our ground-mounted solar installations are large-scale and provide maximum energy output. They are well suited for industries, commercial spaces and large enterprises that seek reliable, efficient and clean energy.
                  </p> */}
                  {/* <NextLink title="See Project" href="#" className="btn btn-sm btn-violet btn-icon btn-icon-end mb-0" /> */}
                {/* </div>

                <div className="col-lg-7">
                  <figure>
                    <img className="img-fluid" src="/img/photos/ground-mounted-solar.jpg" srcSet="/img/photos/f1@2x.png 2x" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div> */}
          <div className="card bg-orange1 mb-10">
            <div className="card-body px-12 py-12">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h3 className="h1 fs-28 post-title mb-3 text-white">Ground-Mounted Solar Solutions</h3>
                  <p className="text-white">
                    Our ground-mounted solar installations are large-scale and provide maximum energy output.
                    They are well suited for industries, commercial spaces and large enterprises that seek
                    reliable, efficient and clean energy.
                  </p>
                </div>
                <div className="col-lg-7">
                  <figure>
                    <img className="img-fluid rounded" src="/img/photos/ground-mounted-solar.jpg"  alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>


          <div className="card bg-orange1 mb-10">
            <div className="card-body px-12 py-12">
              <div className="row align-items-center">
                <div className="col-lg-5 order-lg-2">
                  {/* <div className="post-category mb-3 text-white">Mobile Design</div> */}
                  <h3 className="h1 fs-28 post-title mb-3 text-white">Rooftop Solar Solutions</h3>
                  <p className="text-white">
                  Our rooftop solar solutions bring down electricity costs and lower the carbon footprint of your business or residential building.
                  </p>
                  {/* <NextLink title="See Project" href="#" className="btn btn-sm btn-blue btn-icon btn-icon-end mb-0" /> */}
                </div>

                <div className="col-lg-7">
                  <figure>
                    <img className="img-fluid rounded" src="/img/photos/roof-top-solar.jpg"  alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-orange1 mb-10">
            <div className="card-body px-12 py-12">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  {/* <div className="post-category mb-3 text-white">Mobile Design</div> */}
                  <h3 className="h1 fs-28 post-title mb-3 text-white">Wind-Solar Hybrid Models</h3>
                  <p className="text-white">
                    If you are a business operating in diverse climatic conditions, then our wind-solar hybrid model combines the best of both solar and wind energy. Get consistent and reliable energy for your business, irrespective of the climate. 
                  </p>
                  {/* <NextLink title="See Project" href="#" className="btn btn-sm btn-blue btn-icon btn-icon-end mb-0" /> */}
                </div>

                <div className="col-lg-7">
                  <figure>
                    <img className="img-fluid rounded" src="/img/photos/wind-solar-hybrid.jpg"  alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>


          <div className="card bg-orange1 mb-10">
            <div className="card-body px-12 py-12">
              <div className="row align-items-center">
                <div className="col-lg-5 order-lg-2">
                  {/* <div className="post-category mb-3 text-white">Mobile Design</div> */}
                  <h3 className="h1 fs-28 post-title mb-3 text-white">Mini Grid</h3>
                  <p className="text-white ">
                    Our mini grid solutions combine solar, wind and energy storage systems to provide reliable power to communities, industrial clusters and businesses with limited access to the power grid.
                  </p>
                  {/* <NextLink title="See Project" href="#" className="btn btn-sm btn-blue btn-icon btn-icon-end mb-0" /> */}
                </div>
  
                <div className="col-lg-7">
                  <figure>
                    <img className="img-fluid rounded" src="/img/photos/mini-grid.jpg"  alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>


          <div className="card bg-orange1 mb-10">
            <div className="card-body px-12 py-12">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  {/* <div className="post-category mb-3 text-white">Mobile Design</div> */}
                  <h3 className="h1 fs-28 post-title mb-3 text-white">Wind, Solar and BESS</h3>
                  <p className="text-white">
                    Our wind-solar-BESS solutions are engineered to store excess energy for peak-time usage and grid stability. They can offer uninterrupted power supply even in challenging environments.
                  </p>
                  {/* <NextLink title="See Project" href="#" className="btn btn-sm btn-blue btn-icon btn-icon-end mb-0" /> */}
                </div>

                <div className="col-lg-7">
                  <figure>
                    <img className="img-fluid rounded" src="/img/photos/wind-solar-bess.jpg"  alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>


          <div className="card bg-orange1 mb-10">
            <div className="card-body px-12 py-12">
              <div className="row align-items-center">
                <div className="col-lg-5 order-lg-2">
                  {/* <div className="post-category mb-3 text-white">Mobile Design</div> */}
                  <h3 className="h1 fs-28 post-title mb-3 text-white">Hydrogen Production</h3>
                  <p className="text-white">
                    Our green hydrogen solutions help businesses and industries move towards sustainable fuel alternatives for a low-carbon future.
                  </p>
                  {/* <NextLink title="See Project" href="#" className="btn btn-sm btn-blue btn-icon btn-icon-end mb-0" /> */}
                </div>
   
                <div className="col-lg-7">
                  <figure>
                    <img className="img-fluid rounded" src="/img/photos/hydron-production.jpg"  alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>

   
        </div>
      </section>
    </Fragment>
  );
}