// GLOBAL CUSTOM COMPONENTS
import VideoPlyr from "components/reuseable/VideoPlyr";
// CUSTOM ICON COMPONENT
import Hex from "icons/Hex";
// CUSTOM DATA
import { processList10 } from "data/process";
import { Blog2 } from "components/blocks/blog";

export default function EventsAndMedia() {
    return (

        <>

            <style>
                {`
                .hm-eventsAndmedia::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url(img/home/events-media.png) #0a1905 no-repeat center center;
                   
                    z-index: -1;
                }
                `}
            </style>

        <section className="wrapper hm-eventsAndmedia" style={{position:"relative",zIndex:"100"}}>
            <div className="container  pt-10 pt-md-12">
                <Blog2 />
            </div>
        </section>

        </>  
    );
}
