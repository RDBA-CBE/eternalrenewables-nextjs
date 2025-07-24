"use client";


export default function ProjectDetailBanner({backgroundImage,pageTitle,cleanDescription}) {
  return (
    <section className="video-wrapper px-0 mt-0 min-vh-80 ">
      <video
        loop
        muted
        autoPlay
        playsInline
        id="1187841"
        src={backgroundImage}
        poster={backgroundImage}
      />

      <div className="video-content">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 col-xl-8 text-center text-white mx-auto">
              <h1 className="display-1 fs-45 text-white mb-5">
                {pageTitle}
                {/* <ReplaceMe  key={index} className="rotator-zoom">{item?.title}</ReplaceMe> */}
              </h1>

              <p className="lead fs-22 mb-0 mx-xxl-8 fw-medium text-white">
                {cleanDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
