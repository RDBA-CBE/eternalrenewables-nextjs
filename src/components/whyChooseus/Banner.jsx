import { Fragment } from "react";

export default function Banner() {
    return (

        <Fragment>
            <section className="wrapper bg-soft-primary">
                    <div className="container pt-17 pb-20 pt-md-17 pb-md-23 text-center">
                    <div className="row">
                        <div className="col-xl-5 mx-auto mb-6">
                        <h1 className="display-1 mb-3">About Us</h1>
                        <p className="lead mb-0">A company turning ideas into beautiful things.</p>
                        </div>
                    </div>
                    </div>
            </section>


            <section className="wrapper bg-light">
                <div className="container pb-5">
                <div className="row text-center mb-12 mb-md-15">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-n18 mt-md-n22">
                    <figure>
                        <img
                        alt=""
                        className="w-auto"
                        src="/img/illustrations/i8.png"
                        srcSet="/img/illustrations/i8@2x.png 2x"
                        />
                    </figure>
                    </div>
                </div>

                {/* <div className="row gx-lg-8 gx-xl-12 gy-6 mb-10 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                    <ProgressList />
                    </div>

                    <div className="col-lg-6">
                    <h3 className="display-5 mb-5">
                        The full service we are offering is specifically designed to meet your business needs and projects.
                    </h3>

                    <p>
                        Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur duis
                        mollis commodo.
                    </p>
                    </div>
                </div> */}

                {/* <div className="row gx-lg-8 gx-xl-12 gy-6 gy-md-0 text-center">
                    {serviceList2.map(({ id, Icon, title, description }) => (
                    <div className="col-md-6 col-lg-3" key={id}>
                        {Icon}
                        <h4>{title}</h4>
                        <p className="mb-2">{description}</p>
                    </div>
                    ))}
                </div> */}
                </div>
            </section>
 
  

        </Fragment>


);
}