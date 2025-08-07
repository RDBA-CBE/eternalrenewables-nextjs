"use client"
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero10 } from "components/blocks/hero";
import { Facts7 } from "components/blocks/facts";
import { About11 } from "components/blocks/about";
import { Footer12 } from "components/blocks/footer";
import { Contact5 } from "components/blocks/contact";
import { Clients1 } from "components/blocks/clients";
import { Tiles8, Tiles9 } from "components/elements/tiles";
import { Services13, Services6 } from "components/blocks/services";
import { TestimonialCard4 } from "components/reuseable/testimonial-cards";
import NextLink from "components/reuseable/links/NextLink";
import MediaList from "components/media/MediaList"
import Mediabanner from "components/media/Mediabanner"
import Topbar from "components/elements/Topbar";
import { useEffect } from "react";
import { useSetState } from "utils/state";
import axios from "axios";

export default function Demo10() {
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
              slug: "media",
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
      {/* ========== topbar ========== */}
     
      {/* ========== header ========== */}
      <header className="wrapper bg-light">
        <Navbar language button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />} />
      </header>

      <div dangerouslySetInnerHTML={{ __html: state.pageData }} />

      {/* ========== main content ========== */}
       <main className="content-wrapper">
        
        {/*<Mediabanner />

       
        <MediaList /> */}


    
      </main>

      {/* ========== footer section ========== */}
      <div className="page-frame bg-pale-primary">
             {/* ========== footer section ========== */}
             <Footer12 />
           </div>
    </Fragment>
  );
}
