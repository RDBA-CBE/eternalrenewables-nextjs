import { Banner4 } from "components/blocks/banner";
import NextLink from "components/reuseable/links/NextLink";
import { ServiceCard3 } from "components/reuseable/service-cards";
// CUSTOM DATA
import { aboutList4 } from "data/about";

export default function WhatWeDo() {
    return (
        <>
        <style>
                {`
                .hm-whatwedosec::before {
                    content: '';
                    position: absolute;
                    top: 0px;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url(img/home/what-we-do.png) #0a1905 no-repeat center center;
                    z-index: -1;
                    overflow:hidden
                }
                `}
            </style>
        
        <section className="wrapper hm-whatwedosec bg-green1" style={{position:"relative",zIndex:"100"}}>
            <div className="container py-10">
                <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center">


                    <div className="col-lg-6">
                        <h2 className="fs-16 text-uppercase  mb-3 text-white">Clean energy for homes, businesses and beyond</h2>
                        <h3 className="display-3-n mb-8">What We Do</h3>
                        <div className="row gy-6">
                            {aboutList4.map(({ id, Icon, ...item }) => (
                                <div className="col-md-6" key={id}>
                                    <ServiceCard3 {...item} Icon={<img src={Icon} className=" me-4" width={45} alt="What We Do" />} />
                                </div>
                            ))}
                        </div>
                        <NextLink title="Know More" href="/whatwedo" className="btn btn-soft-primary rounded-pill mt-6 mb-0" />
                    </div>
                    <div className="col-lg-6 position-relative">
                        {/* <Banner4 hideShape btnColor="white" /> */}
                        <figure className="rounded">
                            <img src={`/img/home/Our-project/ground-solar-system.jpg`}  alt="what we do "  />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
