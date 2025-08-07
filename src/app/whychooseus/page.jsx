"use client"
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";

import {  Footer12 } from "components/blocks/footer";

import WhyChooseBanner from "components/whyChooseus/WhyChooseBanner"
import Vision from "components/whyChooseus/Vision"
import ExpertTeam from "components/whyChooseus/ExpertTeam"
import OurCapabilities from "components/whyChooseus/OurCapabilities"
import StrongRelationship from "components/whyChooseus/StrongRelationship"
import EternalEPC from "components/whyChooseus/EternalEPC"
import OurApproach from "components/whyChooseus/OurApproach"
import NextLink from "components/reuseable/links/NextLink";
import Sustainability from "components/whyChooseus/Sustainability";
import Safety from "components/whyChooseus/Safety";
import { useEffect } from "react";
import { useSetState } from "utils/state";
import axios from "axios";

export default function Demo14() {
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
              slug: "whychooseus",
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
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          // button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <div dangerouslySetInnerHTML={{ __html: state.pageData }} />

      {/* ========== main content ========== */}
       <main className="content-wrapper">
        
        
        {/*<WhyChooseBanner/>
        
        <StrongRelationship/>
       
        <Vision />

        <ExpertTeam />

        <OurCapabilities/>

        <EternalEPC/>

        <OurApproach/>

        <Sustainability/>

        <Safety/>*/}

      

        
      </main> 

      {/* ========== footer section ========== */}
      <div className="page-frame bg-pale-primary">
        {/* ========== footer section ========== */}
        <Footer12 />
      </div>
    </Fragment>
  );
}
