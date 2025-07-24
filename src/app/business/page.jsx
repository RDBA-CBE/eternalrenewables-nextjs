// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer12 } from "components/blocks/footer";
import { Facts3 } from "components/blocks/facts";
import { Banner3 } from "components/blocks/banner";
import { Pricing1 } from "components/blocks/pricing";
import { Contact3 } from "components/blocks/contact";
import { Process6 } from "components/blocks/process";
import { Services8 } from "components/blocks/services";

export default function Business() {
  return (
    <>
      <div className=" bg-pale-primary">
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

        {/* <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-8 col-lg-7 col-xl-6 col-xxl-5 mx-auto mb-11">
              <h1 className="display-1 mb-3">Our Services</h1>
              <p className="lead px-lg-7 px-xl-7 px-xxl-6">
                We are a creative company that focuses on establishing
                <span className="underline">long-term relationships</span> with customers.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      </div>

     

      {/* <section
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
      </section> */}

      {/* ========== banner section ========== */}
      <Banner3 />

      <section className="wrapper bg-light angled upper-end">
        <div className="container py-14 py-md-16">
          {/* ========== pricing section ========== */}
          <Pricing1 roundShape bulletBg />

          {/* ========== let's talks section ========== */}
          <Contact3 />
        </div>
      </section>

     
      <div className="page-frame bg-pale-primary">
        {/* ========== footer section ========== */}
        <Footer12 />
      </div>
    </>
  );
}
