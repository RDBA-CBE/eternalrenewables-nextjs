import { Fragment } from "react";

export default function HowWeDoBanner() {
    return (

        <Fragment>
            <section className="wrapper bg-soft-primary">
                    <div className="container pt-17 pb-20 pt-md-17 pb-md-23 text-center">
                    <div className="row">
                        <div className="col-xl-11 mx-auto">
                        <h1 className="display-1 mb-4 fs-45">How <span className="underline-3 style-3 primary">We Do</span></h1>
                        <p className="lead mb-0 fs-22 text-white">Our process begins with thorough identification and survey to assess site viability and project scope.<br/>
                            We ensure transparency through a detailed consent process aligned with local regulations. <br/>
                            From erection to commissioning and grid connection, we handle every phase with precision and expertise.</p>
                        </div>
                    </div>
                    </div>
            </section>


            <section className="wrapper bg-light">
                <div className="container pb-5">
                <div className="row text-center mb-5 mb-md-10">
                    <div className="col-12 mt-n18 mt-md-n22">
                    <figure>
                        <img
                        alt=""
                        className="w-auto rounded"
                        src="/img/how-we-do/header-image.jpg"

                        />

                        {/* <video loop muted autoPlay playsInline className="w-auto rounded" id="1187841"  src="/media/how-we-do.mp4" /> */}
                    </figure>
                    
                    </div>
                </div>

            
                </div>
            </section>
 
  

        </Fragment>


);
}