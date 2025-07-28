import { Banner4 } from 'components/blocks/banner';
import { ServiceCard3 } from 'components/reuseable/service-cards';
import VideoPlyr from 'components/reuseable/VideoPlyr';
// CUSTOM DATA
import { aboutList4 } from 'data/about';
import { processList5 } from 'data/process';
import animation from 'utils/animation';

export default function HowWeDo() {
  return (
    <>
      <style>
        {`
                .hm-HowWeDo::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url(/img/home/How-We-Do/how-we-do-bg.png) no-repeat top center;
                    z-index: -1;
                }
                @media (max-width:767px){
                .hm-HowWeDo::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: 
                    z-index: -1;
                    background: linear-gradient(186deg, #0a1905 7%, #c68a54 22%,  #90442c 50%, #90442c 100%) !important;}
                  
                }
                `}
      </style>
      <section
        className='wrapper bg-green1  mt-0 hm-HowWeDo'
        style={{ position: 'relative', zIndex: '100' }}
      >
        <div className='container  h-auto'>
          <div className='row text-center h-auto'>
            <div
              className='col-lg-12 mx-auto h-auto'
              style={{ position: 'relative' }}
            >
              <h2 className='fs-15 text-uppercase mb-3 text-white how-we-do-subtitle'>
                Turning Potential into Power
              </h2>
              <h3 className='display-3-n mb-0 text-center px-xl-10 px-xxl-15 how-we-do-title'>
                How We Do
              </h3>

              <div className='row gx-lg-8 gx-xl-12 process-wrapper justify-content-center text-center mt-4'>
                {processList5.map(({ title, subtitle, Icon, color, icon }) => (
                  <div
                    key={title}
                    className='col-md-3 text-center custom-col-6'
                  >
                    {/* {<Icon className={`icon-svg-md text-${color} mb-3`} />} */}
                    <img src={icon} alt='icon' />
                    <h4 className='mb-1 pt-2 text-white how-we-do-heading'>
                      {title}
                    </h4>
                    <p className='text-white fw-normal home-how-we-do'>
                      {subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
