// GLOBAL CUSTOM COMPONENTS
import VideoPlyr from "components/reuseable/VideoPlyr";
// CUSTOM ICON COMPONENT
import Hex from "icons/Hex";
// CUSTOM DATA
import { processList10 } from "data/process";

export default function Sustainability() {
    return (
        <>
        
            <style>
                {`
                .hm-sustainability::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url(img/home/substainability.png) #0a1905 no-repeat  center;
                   
                    z-index: -1;
                }
                `}
            </style>
     
        <section className="wrapper hm-sustainability" style={{position:"relative",zIndex:"100"}}>
            <div className="container py-10 py-md-10">


                <div className="row text-center">
                    <div className="col-lg-12 mx-auto p-0">
                        <h2 className="fs-16 text-uppercase mb-3 text-white">Ensuring a sustainable future with net-zero emissions by 2050</h2>
                        <h3 className="display-3 text-center px-xl-10 px-xxl-15 mb-10 text-white">
                           Sustainability
                        </h3>
                        <div className="d-flex justify-content-between flex-wrap process-wrapper arrow text-center text-white gap-4">
                            {processList10.map(({ id, title, description, Icon, icon }) => (
                                <div className="col-md-2 " key={id}>
                                    {/* <Icon className="icon-svg-sm solid-duo text-purple-pink mb-4 " /> */}
                                    <img className="icon-svg-sm solid-duo " width={70} src={icon} alt="icon" />
                                    <h3 className="fs-22 text-white fw-semibold  pt-3">{title}</h3>
                                    <p className="fw-medium text-white">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>

        </>
    );
}
