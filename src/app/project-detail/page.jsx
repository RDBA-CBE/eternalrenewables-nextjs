"use client"
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS

import Navbar from "components/blocks/navbar/navbar-1";
import ProjectBanner from "components/projects/ProjectBanner"
import NewProjectBanner from "components/projects/NewProjectBanner"
import NewProjectCard from "components/projects/NewprojectCard"
import ProjectCard1 from "components/projects/ProjectCard1"
import ProjectDetailBanner from "components/projectDetails/ProjectDetailBanner"
import ProjectDetailMain from "components/projectDetails/ProjectDetailMain"
import { useEffect } from "react";
import { useSetState } from "utils/state";
import axios from "axios";


import { Footer12 } from "components/blocks/footer";

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
                slug: "project-detail",
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
  const banner ={
    title:"Projects",
    description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec id elit ut felis elementum consectetur.",
    img:"/img/home/banner-1.jpg"
  }
  return (
    <Fragment>
      {/* ========== topbar alert section ========== */}
     

      
       <div className="page-frame bg-pale-primary">

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

      <main className="content-wrapper bg-green1">
         <div dangerouslySetInnerHTML={{ __html: state.pageData }} />
        {/* ========== hero section ========== */}
       {/* <ProjectDetailBanner banner={banner}/>

       <ProjectDetailMain/> */}
       
        
      {/* <ProjectCard1/> */}
      </main>
      </div>

      {/* ========== footer section ========== */}
       <div className="page-frame bg-pale-primary">
              {/* ========== footer section ========== */}
              <Footer12 />
            </div>
    </Fragment>
  );
}
