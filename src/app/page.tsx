// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero20 } from "components/blocks/hero";
import { Facts14, Facts7 } from "components/blocks/facts";
import { About21 } from "components/blocks/about";
import { Footer12 } from "components/blocks/footer";
import { Clients5 } from "components/blocks/clients";
import { Process13 } from "components/blocks/process";
import { Services23 } from "components/blocks/services";
import { Portfolio11 } from "components/blocks/portfolio";
import HeroBanner from "components/home/HeroBanner";
import WhyChooseUs from "components/home/WhyChooseUs";
import WhatWeDo from "components/home/WhatWeDo";
import HowWeDo from "components/home/HowWeDo";
import OurProjects from "components/home/OurProjects";
import Sustainability from "components/home/Sustainability";
import EventsAndMedia from "components/home/Events&Media";
import HomeCounter from "components/home/HomeCounter";

export default function Demo20() {
  return (
    <>
      <div className="page-frame bg-pale-primary">
        {/* ========== header ========== */}
        <header className="wrapper">
          <Navbar 
            info
            language
            stickyBox={false}
            logoAlt="logo-light"
            // navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
            navClassName=" navbar navbar-expand-lg center-nav classic position-absolute transparent navbar-dark"
          />
        </header>

        {/* ========== main content ========== */}
        {/* <main className="content-wrapper"> */}
        {/* ========== hero section ========== */}
        <HeroBanner />

        <HomeCounter />

        {/* ========== Why Choose Us section ========== */}
        
      </div>
      <WhyChooseUs />

      {/* ========== what We Do section ========== */}
      <WhatWeDo />

      {/* ========== How We Do section ========== */}
      <HowWeDo />


      {/* ========== Our Projects section ========== */}
      <OurProjects />

      {/* ========== Sustainability section ========== */}

      <Sustainability />


      {/* ========== Events And Media section ========== */}

      {/* <EventsAndMedia /> */}


      {/* <div className="page-frame bg-pale-primary">
      </div> */}
      
      

      {/* </main> */}
      <div className="page-frame bg-pale-primary">
        {/* ========== footer section ========== */}
        <Footer12 />
      </div>
    </>
  );
}
