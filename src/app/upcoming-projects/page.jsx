'use client';
import { Fragment } from 'react';
// GLOBAL CUSTOM COMPONENTS

import Navbar from 'components/blocks/navbar/navbar-1';

import NewProjectBanner from 'components/projects/NewProjectBanner';
import NewProjectCard from 'components/projects/NewprojectCard';
import { useEffect } from 'react';
import { useSetState } from 'utils/state';
import axios from 'axios';
import { Footer12 } from 'components/blocks/footer';

// CUSTOM DATA
import { demos } from 'data/demo-34';

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
        'https://irepute.co.in/eternal/demo/wp-json/wp/v2/pages',
        {
          params: {
            slug: 'upcoming-projects',
            _embed: true,
          },
        }
      );

      if (res?.data?.length > 0) {
        const pageData = res.data[0];
        const featuredImage =
          pageData._embedded?.['wp:featuredmedia']?.[0]?.source_url;
        const pageTitle = pageData.title?.rendered;
        const pageDescription =
          pageData._embedded?.['wp:featuredmedia']?.[0]?.caption?.rendered;
        const cleanDescription = pageDescription
          ? pageDescription.replace(/<p>|<\/p>/g, '').trim()
          : 'No description available';
        console.log(pageDescription);

        setState({
          pageData: pageData.content?.rendered,
          backgroundImage: featuredImage,
          pageTitle: pageTitle,
          cleanDescription: cleanDescription,
        });
      } else {
        console.error('Page not found');
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };
  const projects4 = [
    {
      location: 'consectetur',
      title: 'Amet consectetur',
      subtitle: 'Read more',
      image: '/img/home/banner-1.jpg',
      class: 'border-radius pad',
    },
    {
      location: 'consectetur',
      title: 'consectetur',
      subtitle: 'Read more',
      image: '/img/home/banner-1.jpg',
      class: ' border-radius-left',
    },
  ];
  return (
    <Fragment>
      {/* ========== topbar alert section ========== */}

      <div className='page-frame bg-pale-primary'>
        <header className='wrapper'>
          <Navbar
            info
            language
            stickyBox={false}
            logoAlt='logo-light'
            // navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
            navClassName=' navbar navbar-expand-lg center-nav classic position-absolute transparent navbar-dark'
          />
        </header>

        <main className='content-wrapper bg-green1'>
          {/* ========== hero section ========== */}
          <NewProjectBanner
            backgroundImage={state.backgroundImage}
            pageTitle={state.pageTitle}
            cleanDescription={state.cleanDescription}
          />
          <div dangerouslySetInnerHTML={{ __html: state.pageData }} />

          {/* <NewProjectCard/> */}

          {/* <ProjectCard1/> */}
        </main>
      </div>

      {/* <div className="page-frame bg-green1   py-10 py-md-0 bottom-sec">
        <div className="container-fluid solar-projects-container ">

       <div className="row px-3 px-md-0 mt-5">
        {projects4.map((project, index) => (
          <div className={`col-12  col-md-6 bg-white   p-0 ${project.class !== "card-padding" ? project.class : " "  } `} key={index} >
            <div
              className={`solar-project-card ${project.class !== "card-padding" ? project.class : " "  }    `}
              style={{ backgroundImage: `url(${project.image})`, }}
            >
              <div className="solar-project-overlay">
                <div>
                    <p className="solar-project-location  w-100">{project.location}</p>
                <h3 className="solar-project-title text-white" dangerouslySetInnerHTML={{__html:project.title}}></h3>
                <p className="solar-project-subtitle text-white w-100" ><a href="project-detail" className="text-white">{project.subtitle}</a></p>
                </div> 
                
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
      </div> */}

      {/* ========== footer section ========== */}
      <div className='page-frame bg-pale-primary'>
        {/* ========== footer section ========== */}
        <Footer12 />
      </div>
    </Fragment>
  );
}
