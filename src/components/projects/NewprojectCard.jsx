import React from "react";

const projects = [
  {
    location: "consectetur",
    title: "Consectetur <br/>  amettur",
    subtitle: "Read more",
    image:"/img/home/banner-1.jpg",
     class:"border-radius"
, 
  },
  {
    location: "consectetur",
    title: "consectetur",
    subtitle: "Read more",
    image: "/img/home/banner-1.jpg",
    class:"card-padding"
  },
  {
    location: "consectetur",
    title:  "Consectetur <br/>  amettur",
    subtitle: "Read more",
    image:"/img/home/banner-1.jpg",
    class:"border-radius-left"
  },
];

const projects2 = [
  {
    location: "consectetur",
    title:  "Consectetur <br/>  amettur",
    subtitle: "Read more",
    image:"/img/home/banner-1.jpg",
    class:"border-radius"
, 
  },
  {
    location: "consectetur",
    title: "consectetur",
    subtitle: "Read more",
    image: "/img/home/banner-1.jpg",
    class:"card-padding"
  },
  {
    location: "consectetur",
    title:  "Consectetur <br/>  amettur",
    subtitle: "Read more",
    
    image:"/img/home/banner-1.jpg",
    class:"border-radius-left"
  },
]
  const projects3 = [
  {
    location: "consectetur",
    title:  "Consectetur <br/>  amettur",
    subtitle: "Read more",
    image:"/img/home/banner-1.jpg",
    class:"border-radius"
, 
  },
  {
    location: "consectetur",
    title: "consectetur",
    subtitle: "Read more",
    image: "/img/home/banner-1.jpg",
    class:"card-padding"
  },
  {
    location: "consectetur",
    title:  "Consectetur <br/>  amettur",
    subtitle: "Read more",
    
    image:"/img/home/banner-1.jpg",
    class:"border-radius-left"
  },
]
  const projects4 = [
  {
    location: "consectetur",
    title: "Amet <br/>  consectetur",
    subtitle: "Read more",
    image:"/img/home/banner-1.jpg",
    class:"border-radius"
, 
  },
  {
    location: "consectetur",
    title: "consectetur",
    subtitle: "Read more",
    image: "/img/home/banner-1.jpg",
    class:" border-radius-left"
  },
  
];

const NewProjectCard = () => {
  return (
    <>
    <div className="container solar-projects-container pb-10 pb-md-0">
      <div className="row px-3 px-md-0 mt-10 mt-md-10">
        {projects.map((project, index) => (
          <div className={`col-12  col-md-4 bg-white  p-0 ${project.class ? project.class : ""} `} key={index}>
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

       <div className="row px-3 px-md-0 mt-10 mt-md-10">
        {projects2.map((project, index) => (
          <div className={`col-12  col-md-4 bg-white  p-0 ${project.class ? project.class : ""} `} key={index}>
           <div
              className={`solar-project-card ${project.class !== "card-padding" ? project.class : " "  }    `}
              style={{ backgroundImage: `url(${project.image})`, }}
            >
              <div className="solar-project-overlay">
                <div>
                    <p className="solar-project-location  w-100">{project.location}</p>
                <h3 className="solar-project-title text-white" dangerouslySetInnerHTML={{__html:project.title}}></h3>
                <p className="solar-project-subtitle text-white w-100"><a href="project-detail" className="text-white">{project.subtitle}</a></p>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>

       <div className="row px-3 px-md-0 mt-10 mt-md-10">
        {projects3.map((project, index) => (
          <div className={`col-12  col-md-4 bg-white  p-0 ${project.class ? project.class : ""} `} key={index}>
           <div
              className={`solar-project-card ${project.class !== "card-padding" ? project.class : " "  }    `}
              style={{ backgroundImage: `url(${project.image})`, }}
            >
              <div className="solar-project-overlay">
                <div>
                  <p className="solar-project-location  w-100">{project.location}</p>
                  <h3 className="solar-project-title text-white" dangerouslySetInnerHTML={{__html:project.title}}></h3>
                  <p className="solar-project-subtitle text-white w-100"><a href="project-detail" className="text-white">{project.subtitle}</a></p>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>

   
    </>
    
  );
};

export default NewProjectCard;
