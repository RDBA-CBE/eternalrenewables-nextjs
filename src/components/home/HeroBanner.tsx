"use client"
import ReplaceMe from "components/ReplaceMe";
import Carousel from "components/reuseable/Carousel";


export default function HeroBanner() {
  const carouselBreakpoints = { 0: { slidesPerView: 1 }, 992: { slidesPerView: 1 } };

 
 

  const bannerContent = [
    {
      title:"Sustainable Energy , <br/> Infinite Possibilities ",
      // description:"Developing solar farms to meet India’s green energy goals",
      src:"/img/home/banner-16.jpg"

    },
    {
      title:"Reliable and sustainable growth",
      description:"Over 25 years of experience driving India’s clean energy transition",
      src:"/img/home/banner-2.jpg",
      // src:"media/banner-vid1.mp4"

    },
    
    {
      title:"Reducing dependence on fossil fuels ",
      // description:"Driving India’s renewable energy targets with high-quality, reliable and impactful assets",
      src:"/img/home/banner-4.jpg"

    },
    {
      // title:"Educating and inspiring communities",
      // description:"Making sustainable energy solutions easy and affordable",
      src:"/img/home/banner-3.jpg"

    },
  ]

  return (
    <div className="swiper-container blog grid-view mb-5 home-ban">
    <Carousel  navigation={false} breakpoints={carouselBreakpoints}
    // autoplay={{ delay: 3000, disableOnInteraction: false }}
    slidesPerView={1}
    loop
    // pagination={false}
    >

    {bannerContent.map((item:any,index:any)=>(
      <section key={index} className="video-wrapper px-0 mt-0 min-vh-80 ">
      <video loop muted autoPlay playsInline id="1187841" poster={item?.src} src={item?.src} />

      <div className="video-content">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 col-xl-6 text-center text-white mx-auto">
              <h1 className="display-1 fs-45 text-white mb-5" dangerouslySetInnerHTML={{__html:item?.title}}>
                {/* <ReplaceMe  key={index} className="rotator-zoom">{item?.title}</ReplaceMe> */}
                
              </h1>

              <p className="lead fs-22 mb-0 mx-xxl-8 fw-medium text-white">
              {item?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    ))}
    

    </Carousel>
  </div>
  );
}