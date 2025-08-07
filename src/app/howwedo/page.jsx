// GLOBAL CUSTOM COMPONENTS
"use client"
import Navbar from "components/blocks/navbar/navbar-1";

import { Footer12 } from "components/blocks/footer";

import Banner from "components/whyChooseus/Banner"
import Service from "components/whyChooseus/Service"
import HowItWorks from "components/whyChooseus/HowItWorks"
import WhyChooseUs from "components/whyChooseus/WhyChooseUs"
import Testimonials from "components/whyChooseus/Testimonials";
import CTA from "components/whyChooseus/CTA";
import { Team8 } from "components/blocks/team";
import HowWeDoBanner from "components/howWeDo/HowWeDoBanner"
import EternalEnergy from "components/howWeDo/EternalEnergy"
import EternalEPC from "components/howWeDo/EternalEPC"
import RiskManagement from "components/howWeDo/RiskManagement"
import ProjectDevelopment from "components/howWeDo/ProjectDevelopment"
import EternalOM from "components/howWeDo/EternalOM"
import LongTerm from "components/howWeDo/LongTerm"
import OperationMaintainance from "components/howWeDo/OperationMaintainance"
import SmartEnergy from "components/howWeDo/SmartEnergy"
import { useEffect } from "react";
import { useSetState } from "utils/state";
import axios from "axios";




export default function HowWeDo() {
  const [state, setState] = useSetState({
    pageData: {},
  });

  useEffect(() => {
    slugData();
  }, []);


    const slugData = async () => {
      try {
        const res = await axios.get(
          "https://slategray-tapir-928038.hostingersite.com/wp-json/wp/v2/pages",
          {
            params: {
              slug: "howwedo",
              _embed: true,
            },
          }
        );
    
        if (res?.data?.length > 0) {
          const pageData = res.data[0];
          const featuredImage = pageData._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
          const pageTitle = pageData.title?.rendered;
    
          setState({
            pageData: pageData.content?.rendered,
            backgroundImage: featuredImage,
            pageTitle: pageTitle,
          });
        } else {
          console.error("Page not found");
        }
      } catch (error) {
        console.log("error: ", error);
      }
    };

  return (
    <>
      <div className="page-frame bg-soft-primary">
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

    <div dangerouslySetInnerHTML={{ __html: state.pageData }} />

    {/* <HowWeDoBanner/>

    <EternalEnergy/>

    <EternalEPC/>

    <RiskManagement/>

    <ProjectDevelopment/>

    <EternalOM/>

    <LongTerm/>

    <OperationMaintainance/>

    <SmartEnergy/> */}

   

      {/* </main> */}
      <div className="page-frame bg-pale-primary">
        {/* ========== footer section ========== */}
        <Footer12 />
      </div>
    </>
  );
}
