"use client"

import { Fragment, useState } from "react";
// GLOBAL CUSTOM COMPONENTS
import MasonryGrid from "components/MasonryGrid";
import { FAQ2 } from "components/blocks/faq";
import { JobPostCard1 } from "components/reuseable/job-cards";
import NextLink from "components/reuseable/links/NextLink";
import { ServiceCard3 } from "components/reuseable/service-cards";
import { TestimonialCard3 } from "components/reuseable/testimonial-cards";
import { Footer12 } from "components/blocks/footer";
// CUSTOM DATA
import data from "data/career-page-1";
import Navbar from "components/blocks/navbar/navbar-1";
import CareerList from "components/career/CareerList";
import Alarm from "icons/solid-mono/Alarm";
import Wallet from "icons/solid-mono/Wallet";
import Target from "icons/solid-mono/Target";
import Building from "icons/solid-mono/Building";
import Employees from "icons/solid-mono/Employees";
import VideoChat from "icons/solid-mono/VideoChat";
import CareerForm from "components/career/CareerForm";
import { useEffect } from "react";
import { useSetState } from "utils/state";
import axios from "axios";

export default function Career() {

  const [state, setState] = useSetState({
    pageData: {},
  });

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await axios.get(
        "https://irepute.co.in/eternal/demo/wp-json/wp/v2/pages",
        {
          params: {
            slug: "career",
            _embed: true,
          },
        }
      );

      if (res?.data?.length > 0) {
        const pageData = res.data[0];
        const featuredImage =
          pageData._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
        const pageTitle = pageData.title?.rendered;

        setState({
          pageData: pageData.content?.rendered,
          backgroundImage: featuredImage,
          pageTitle: pageTitle,
        });
      } else {
        console.error("Page not found");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };


  // const facilities = [
  //   {
  //     id: 1,
  //     icon: "/img/photos/munting-partner.png",
  //     title: "Mounting Partner",
  //     description: `Collaborate with us to integrate high-quality sustainable development equipment and innovative solutions.`,
  //   },
  //   {
  //     id: 2,
  //     icon: "/img/photos/vendor-portal.png",
  //     title: "Vendor Portal",
  //     description: `Stay connected with us to streamline processes and maintain transparent communication.`,
  //   },
  //   {
  //     id: 3,
  //     icon: "/img/photos/customer-login.png",
  //     title: "Customer Login",
  //     description: `Existing customers can log in to gain real-time insights, manage their accounts and for personalized support from our team.`,
  //   },
  // ];

   const [isMobile, setIsMobile] = useState(false);
    
      useEffect(() => {
        const checkScreenSize = () => {
          setIsMobile(window.innerWidth <= 375);
        };
    
        // Initial check
        checkScreenSize();
    
        // Update on resize
        window.addEventListener('resize', checkScreenSize);
    
        return () => window.removeEventListener('resize', checkScreenSize);
      }, []);

  
  return (
    <Fragment>
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
      </div>
      {/* ========== page title section ========== */}

     

      <main className="content-wrapper contactUs career-page">
      <div dangerouslySetInnerHTML={{ __html: state.pageData }} /> 

      {/*<section className="wrapper bg-soft-primary">
        <div className="container pt-17 pb-20 pt-md-19 pb-md-21  text-center">
          <div className="row">
            <div className="col-lg-12 mx-auto mb-11">
              <h1 className="fs-15 text-uppercase text-white mb-3">Join Our Team</h1>
              <h3 className="text-white">We are looking for passionate individuals eager to make an impact in the renewable energy sector. Become a part of a dynamic team committed to creating a net-zero carbon future.</h3>
            </div>
          </div>
        </div>
      </section>

     
      <section className="wrapper bg-light">
        <div className="container pb-5 pb-md-10">
          <div className="row mb-14">
            <div className="col-12 mt-n18 mt-md-n20 mt-lg-n21 position-relative">
              <div className="shape bg-dot red rellax w-16 h-18" style={{ top: "1rem", left: "-3.2rem" }} />
              <div className="shape pale-primary w-19 h-19 rellax" style={{ bottom: "2rem", right: "-3rem" }}>
                <svg
                  viewBox="0 0 500 549.53"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg-inject icon-svg w-100 h-100">
                  <path
                    className="svg-fill"
                    d="M250 549.39c-15.51 0-30.05-3.46-40.94-9.75l-168-97C18.5 429.63.14 397.82.14 371.75v-194c0-26.07 18.36-57.88 40.94-70.91l168-97C220 3.6 234.49.14 250 .14s30.05 3.46 40.94 9.75l168 97c22.58 13 40.94 44.84 40.94 70.91v194c0 26.07-18.36 57.88-40.94 70.91l-168 97c-10.89 6.22-25.43 9.68-40.94 9.68z"
                  />
                </svg>
              </div>

              <figure className="rounded">
                <img src="/img/career-bg.jpg" srcSet="/img/photos/about18@2x.jpg 2x" alt="" />
              </figure>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-8">
          {facilities.map(({ icon, id, ...item }) => (
            <div className="col-md-6 col-lg-4" key={id}>
              <CareerList {...item} 
                Icon={
                  <img
                    src={icon}
                    alt={item.title}
                    className="icon-svg-sm solid-mono text-primary me-4"
                    style={{ width: '40px', height: '40px' }}
                  />
                }
              />
            </div>
          ))}
          </div>

          <div className="text-center mt-10">
            <NextLink title="Join Our Team" href="#" className="btn btn-lg btn-soft-primary rounded-pill" />
          </div>
        </div>
      </section>*/}

      <section className="wrapper bg-light">
        <div className="container pt-5 pt-10">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
              <h2 className="display-3 mb-3 text-center text-green1">Join Us</h2>
              <p className="lead text-center mb-10 fs-17">
                Reach out to us from our contact form and we will get back to you shortly.
              </p>
              <iframe
                src="https://irepute.co.in/eternal/demo/career-1/"
                

                width="100%"
                height="600px"
                className="career-form-iframe"
                 style={{ border: "none" }}
                  scrolling={isMobile ?"yes":"no"}
                  
                ></iframe>
              {/* <CareerForm/> */}
            </div>
          </div>
        </div>

      </section>

     

    

      {/* ========== job position section ========== */}
      {/* <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row text-center">
            <div className="col-xl-10 mx-auto">
              <h1 className="fs-15 text-uppercase text-primary mb-3">Job Positions</h1>
              <h3 className="display-3 mb-10 px-xxl-15 text-green">
                We’re always searching for amazing people to join our team. Take a look at our current openings.
              </h3>
            </div>
          </div>

          <div className="row gy-6">
            {data.jobList.map((item) => (
              <JobPostCard1 {...item} key={item.id} />
            ))}
          </div>

          <div className="row mt-11">
            <div className="col-lg-6 col-xl-5 mx-auto text-center">
              <h2 className="display-6 mb-3">Can&apos;t find the right position?</h2>
              <p className="lead mb-5 px-md-16 px-lg-3">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur.
              </p>

              <NextLink title="Get in Touch" href="#" className="btn btn-primary rounded-pill" />
            </div>
          </div>
        </div>
      </section> */}

      {/* ========== faq section ========== */}
      {/* <FAQ2 titleColor="primary" /> */}

      </main>

      <div className="page-frame bg-pale-primary">
        {/* ========== footer section ========== */}
        <Footer12 />
      </div>
    </Fragment>
  );
}
