// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";

import { Footer12 } from "components/blocks/footer";
import { Fragment } from "react";
import { Services9 } from "components/blocks/services";
import WhatWeDo from "components/projectDetail/WhatWeDo";
import OurProcess from "components/projectDetail/OurProcess";
import About from "components/projectDetail/About";
import Pricing from "components/projectDetail/Pricing";
import { Facts4 } from "components/blocks/facts";



export default function Projects() {
  return (
    <>
      <div className=" bg-white">
        {/* ========== header ========== */}
        <header className="wrapper">
          <Navbar
            info
            language
            stickyBox={false}
            logoAlt="logo-light"
            navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
          />
        </header>

      </div>

      <Fragment>
      <section
        className="wrapper image-wrapper bg-image bg-overlay text-white"
        style={{ backgroundImage: "url(/img/photos/bg1.jpg)" }}>
        <div className="container pt-19 pt-md-21 pb-18 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
              <h1 className="display-1 text-white mb-3">Our Services</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                We are a creative company that focuses on establishing long-term relationships with customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper bg-light">
        <div className="container pt-14 pb-12 pt-md-16 pb-md-14">
          <WhatWeDo />
        </div>
      </section>

      <OurProcess/>

      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          {/* <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-16 align-items-center"> */}
            <About/>
          {/* </div> */}

         
        </div>
      </section>


     <Pricing/>

     <Facts4 />


      </Fragment>

      
     
      <div className="page-frame bg-pale-primary">
        {/* ========== footer section ========== */}
        <Footer12 />
      </div>
    </>
  );
}
