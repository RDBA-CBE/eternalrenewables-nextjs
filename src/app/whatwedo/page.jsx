"use client"
import Link from "next/link";
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero34 } from "components/blocks/hero";
import { Footer12 } from "components/blocks/footer";
import { Pricing12 } from "components/blocks/pricing";
import { Process21 } from "components/blocks/process";
import { Services37 } from "components/blocks/services";
import { About35, About36 } from "components/blocks/about";
import { Testimonial28 } from "components/blocks/testimonial";
import CTA from "components/whyChooseus/CTA"
import ServiceList from "components/WhatWeDo/ServiceList"
import WhatWeDoBanner from "components/WhatWeDo/WhatWeDoBanner"
import { useEffect } from "react";
import { useSetState } from "utils/state";
import axios from "axios";

export default function Demo34() {

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
              slug: "whatwedo",
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
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-blue pb-2">
        <Navbar
          language
          button={
            <Link href="#" className="btn btn-sm btn-primary rounded">
              Contact
            </Link>
          }
        />
      </header>

      <div dangerouslySetInnerHTML={{ __html: state.pageData }} />

      <main className="content-wrapper">
   
       {/*  <WhatWeDoBanner />

      
        <ServiceList />*/}

      </main> 

      {/* ========== footer section ========== */}
       <div className="page-frame bg-pale-primary">
              {/* ========== footer section ========== */}
              <Footer12 />
            </div>
    </Fragment>
  );
}
