"use client"
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS

import Navbar from "components/blocks/navbar/navbar-1";
import AwardBanner from "components/awards/AwardBanner"
import AwardCard1 from "components/awards/AwardCard"
import { Footer12 } from "components/blocks/footer";
import { useEffect } from "react";
import { useSetState } from "utils/state";
import axios from "axios";




// CUSTOM DATA
import { demos } from "data/demo-34";

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
              slug: "awards",
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
      {/* ========== topbar alert section ========== */}
     

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          logoAlt="logo-purple"
          button={
            <a
              href="https://1.envato.market/Ea4VxK"
              className="btn btn-primary rounded-pill"
              target="_blank"
              rel="noreferrer">
              Purchase Now
            </a>
          }
        />
      </header>

      <div dangerouslySetInnerHTML={{ __html: state.pageData }} />

      {/* <main className="content-wrapper">
       
        <AwardBanner />

      <AwardCard1/>
      </main> */}

      {/* ========== footer section ========== */}
       <div className="page-frame bg-pale-primary">
              {/* ========== footer section ========== */}
              <Footer12 />
            </div>
    </Fragment>
  );
}