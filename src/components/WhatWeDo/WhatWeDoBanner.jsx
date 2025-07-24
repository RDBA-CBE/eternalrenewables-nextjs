import LightBox from "components/LightBox";
// CUSTOM UTILS
import { fadeInAnimate, slideInDownAnimate } from "utils/animation";

export default function WhatWeDoBanner() {
  return (
    <section className="wrapper bg-soft-primary position-relative min-vh-60 d-lg-flex align-items-center">
      <div
        className="col-lg-6 position-lg-absolute top-0 start-0 image-wrapper bg-image bg-cover h-100"
        style={{ backgroundImage: "url(img/what-we-do/what-we-do.jpg)" }}>
        {/* <a
          data-glightbox=""
          href="/media/movie3.mp4"
          className="btn btn-circle btn-primary btn-play ripple mx-auto position-absolute d-lg-none"
          style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 3 }}
          data-gallery="mobile-video">
          <i className="icn-caret-right"></i>
        </a> */}
      </div>

      <div
        data-cue="fadeIn"
        data-delay="600"
        data-show="true"
        className="container position-relative"
        style={fadeInAnimate("600ms")}>
        {/* <a
          data-glightbox=""
          href="/media/movie3.mp4"
          className="btn btn-circle btn-primary btn-play ripple mx-auto position-absolute d-none d-lg-flex"
          style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 3 }}
          data-gallery="desktop-video">
          <i className="icn-caret-right"></i>
        </a> */}

        {/* USED FOR IMAGE LIGHTBOX */}
        <LightBox />

        <div className="row gx-0">
          <div className="col-lg-6 offset-lg-6">
            <div
              className="py-8 py-lg-16 ps-lg-12 py-xxl-18 ps-xxl-16 pe-lg-0 position-relative"
              data-cues="slideInDown"
              data-group="page-title"
              data-disabled="true">
              <h1
                className="display-1 ls-xs fs-45 mb-4"
                data-cue="slideInDown"
                data-group="page-title"
                data-show="true"
                style={slideInDownAnimate("0ms")}>
                What <span className="underline-3 style-2 yellow">We Do</span> 
              </h1>

              <p
                className="lead fs-22 lh-sm mb-0 mb-lg-7 text-white"
                data-cue="slideInDown"
                data-group="page-title"
                data-show="true"
                style={slideInDownAnimate("300ms")}>
                Delivering world-class renewable energy solutions that drive sustainability, efficiency, and long-term value for businesses and communities.
              </p>

              {/* <div data-cue="slideInDown" data-group="page-title" data-show="true" style={slideInDownAnimate("600ms")}>
                <a className="btn btn-lg btn-primary rounded mb-2">Get Started</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
