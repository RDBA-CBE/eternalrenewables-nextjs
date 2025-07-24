// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero20 } from "components/blocks/hero";
import { Facts14 } from "components/blocks/facts";
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

export default function Technologies() {
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
            navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
          />
        </header>

      
      </div>

     
      <div className="page-frame bg-pale-primary">
        {/* ========== footer section ========== */}
        <Footer12 />
      </div>
    </>
  );
}
