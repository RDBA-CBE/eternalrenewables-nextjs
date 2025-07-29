// GLOBAL CUSTOM COMPONENTS
'use client';
import Navbar from 'components/blocks/navbar/navbar-1';
import { Hero20 } from 'components/blocks/hero';
import { Facts14 } from 'components/blocks/facts';
import { About21 } from 'components/blocks/about';
import { Footer12 } from 'components/blocks/footer';
import { Clients5 } from 'components/blocks/clients';
import { Process13 } from 'components/blocks/process';
import { Services23 } from 'components/blocks/services';
import { Portfolio11 } from 'components/blocks/portfolio';
import HeroBanner from 'components/home/HeroBanner';
import WhyChooseUs from 'components/home/WhyChooseUs';
import WhatWeDo from 'components/home/WhatWeDo';
import HowWeDo from 'components/home/HowWeDo';
import OurProjects from 'components/home/OurProjects';
import Sustainability from 'components/home/Sustainability';
import EventsAndMedia from 'components/home/Events&Media';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import ContactForm from 'components/common/ContactForm';
import { useEffect, useState } from 'react';
import { useSetState } from 'utils/state';
import axios from 'axios';

export default function ContactUs() {
  const [state, setState] = useSetState({
    pageData: {},
  });

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await axios.get(
        'https://irepute.co.in/eternal/demo/wp-json/wp/v2/pages',
        {
          params: {
            slug: 'contactus',
            _embed: true,
          },
        }
      );
      const res1 = await axios.get(
        'https://irepute.co.in/eternal/demo/wp-json/wp/v2/pages',
        {
          params: {
            slug: 'contact-us-2',
            _embed: true,
          },
        }
      );

      if (res?.data?.length > 0) {
        const pageData = res.data[0];
        const pageData1=res1.data[0];
        const featuredImage =
          pageData._embedded?.['wp:featuredmedia']?.[0]?.source_url;
        const pageTitle = pageData.title?.rendered;

        setState({
          pageData: pageData.content?.rendered,
          pageData1: pageData1.content?.rendered,
          backgroundImage: featuredImage,
          pageTitle: pageTitle,
        });
      } else {
        console.error('Page not found');
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };
  console.log('pageData1',state.pageData1);
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

  const breadcrumb = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'Contact', url: '#' },
  ];
  return (
    <>
      <div className=' bg-pale-primary'>
        {/* ========== header ========== */}
        <header className='wrapper'>
          <Navbar
            info
            language
            stickyBox={false}
            logoAlt='logo-light'
            navClassName='navbar navbar-expand-lg classic transparent position-absolute navbar-dark'
          />
        </header>
      </div>

      {/* <div dangerouslySetInnerHTML={{ __html: state.pageData }} /> */}

      <main className='content-wrapper contactUs'>
        <div dangerouslySetInnerHTML={{ __html: state.pageData }} />
        {/* ========== page title section ========== */}
        {/*<section
          className="wrapper image-wrapper bg-image  text-white"
          style={{ backgroundImage: "url(/img/photos/contactus-bg.jpg)" }}>
          <div className="container  pt-17 pb-20 pt-md-19 pb-md-21 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto ">
                <h1 className=" fs-45 mb-3 text-black">Get in Touch</h1>
                {/* <Breadcrumb className="text-white" data={breadcrumb} /> */}
        {/*</div>
            </div>
          </div>
        </section>*/}

        {/*<div className="wrapper bg-light angled upper-end">
          <div className="container ">
            {/* ========== contact info section ========== */}
        {/*<div className="row mb-8 mb-md-12 ">
              <div className="col-xl-10 mx-auto mt-n19">
                <div className="card">
                  <div className="row gx-0">
                    <div className="col-lg-6 align-self-stretch">
                      <div className="map map-full rounded-top rounded-lg-start">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3920.8745273781806!2d77.01946287504033!3d10.666846089475307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQwJzAwLjciTiA3N8KwMDEnMTkuMyJF!5e0!3m2!1sen!2sin!4v1745992742863!5m2!1sen!2sin"
                          style={{ border: 0, width: "100%", height: "100%" }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>

                    <div className="col-lg-6 bg-green1">
                      <div className="p-10 p-md-11 p-lg-14">
                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-white fs-28 me-4 mt-n1">
                              <i className="uil uil-location-pin-alt" />
                            </div>
                          </div>
                          <div className="align-self-start justify-content-start">
                            <h5 className="mb-1 text-white">Address</h5>
                            <address className="text-white fs-17">
                              Eternal Renewables Private Limited,
                              <br className="d-none d-md-block" /> No. 118,
                              Nehru Street, Rathinasabapathipuram,
                              <br className="d-none d-md-block" />{" "}
                              T.Kottampatty, Mahalingapuram,
                              <br className="d-none d-md-block" /> Pollachi,
                              Tamilnadu, <br className="d-none d-md-block" />
                              Coimbatore - 642 002, India.
                            </address>
                          </div>
                        </div> */}

        {/* <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-phone-volume" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1 text-blue">Phone</h5>
                            <p className="text-dark">
                              +91 99761 89999 
                            </p>
                          </div>
                        </div> */}

        {/* <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-white fs-28 me-4 mt-n1">
                              <i className="uil uil-envelope" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1 text-white">E-mail</h5>
                            <p className="mb-0">
                              <a
                                href="mailto:ceo@eternalrenewables.com"
                                className="link-body text-white"
                              >
                                ceo@eternalrenewables.com
                              </a>
                            </p>
                            {/* <p className="mb-0 text-blue">
                              <a href="mailto:help@sandbox.com" className="link-body  text-dark">
                                help@sandbox.com
                              </a>
                            </p> */}
        {/* </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== contact form section ========== */}
        <div className='row pt-6 '>
          <div className='col-lg-10 offset-lg-1 col-xl-8 offset-xl-2'>
            <h2 className='display-3 mb-3 text-center text-green1'>
              Get in Touch
            </h2>
            <p className='lead text-center mb-10 fs-17'>
              To better serve you and get your questions to the right
              people,Fill up the Form :
            </p>

            <iframe
              src='https://irepute.co.in/eternal/demo/contact-us-1/'
              width='100%'
              className='contact-form-iframe-contact'
              // style="border: none;"

              scrolling='no'
            ></iframe>
            {/* <iframe
                  src="https://connect.irepute.in/file/eternal-renewables-contactus/"
                  width="100%"
                  className="contact-form-iframe"
                  style={{ border: "none" }}
                  scrolling={isMobile ? "yes" : "no"}
                ></iframe>

                {/* <ContactForm /> */}
          </div>
        </div>
        {/*  </div>
        </div>*/}

        <div className='container-card'>
          <div dangerouslySetInnerHTML={{ __html: state.pageData1 }} />

          {/* <div
            className='card image-wrapper bg-full bg-image  mb-12'
            style={{ backgroundImage: 'url(/img/photos/bg22.png)' }}
          >
            <div className='card-body py-14 px-0'>
              <div className='container'>
                <div className='row text-center'>
                  <div className='col-xl-11 col-xxl-9 mx-auto'>
                    <h2 className='display-3  text-green1 mb-3'>
                      Service &amp; Support
                    </h2>
                    <p className=' mb-7 px-lg-17'>
                      We provide 24/7 to provide expert guidance, technical
                      assistance, and maintenance solutions, ensuring your
                      renewable energy systems perform at their best all through
                      the year.
                    </p>
                  </div>
                </div>

                <div className='d-flex justify-content-center'>
                  <span>
                    <a className='btn btn-lg btn-soft-primary rounded-pill py-2' href='tel:+919597788792'>
                      Get Started
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </main>

      <div className='page-frame bg-pale-primary'>
        {/* ========== footer section ========== */}
        <Footer12 />
      </div>
    </>
  );
}

