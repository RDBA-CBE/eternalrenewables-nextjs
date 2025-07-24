import SocialLinks from 'components/reuseable/SocialLinks';
import NextLink from 'components/reuseable/links/NextLink';
// CUSTOM DATA
import footerNav, { helps } from 'data/footer';
import Link from 'next/link';

export default function Footer12() {
  return (
    <footer className=' text-inverse text-white mt-0 bg-orange1'>
      <div className='container-fluid py-10 py-md-10'>
        <div className='row gy-6 gy-lg-0'>
          <div className='col-12 col-lg-10 col-xl-12 mx-auto px-0 '>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-sm-6 col-xl-3 ps-lg-0'>
                  <div className='widget'>
                    <Link href='/'>
                      <img
                        className='mb-4 footer-img'
                        src='/img/sandbox-logo/Footer-logo-white.png'
                        srcSet='/img/sandbox-logo/Footer-logo-white @2x.png 2x'
                        alt=''
                        style={{ width: 'auto', objectFit: 'contain' }}
                      />
                    </Link>
                    <p
                      className='mb-2 text-white fs-16'
                      style={{ textAlign: 'justify' }}
                    >
                      Eternal Renewables is a fast-growing Indian EPCM company
                      providing integrated solutions for renewable energy
                      projects.
                    </p>

                    <p className='mb-0  mb-md-2 text-white fw-normal'>
                      Copyrights 2025 © Eternal Renewables.{' '}
                      <br className='d-none d-lg-block' />
                    </p>
                    <div className='mb-0 mb-md-2 text-white fw-normal d-flex align-items-center gap-2'>
                      <span>Follow us:</span>
                      <SocialLinks className='nav social social-white pt-md-0 pt-0' />
                    </div>
                  </div>
                </div>
                <div className='col-12 col-sm-6 col-xl-2 mt-5 mt-sm-0 pt-md-2 pt-5'>
                  <div className='widget'>
                    <h4 className='widget-title text-white mb-3'>
                      Quick Links
                    </h4>
                    <ul className='list-unstyled text-white mb-0'>
                      {helps.map(({ title, url }) => (
                        <li className='fw-normal' key={title}>
                          <NextLink title={title} href={url} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className='col-12 col-sm-6 col-xl-3 mt-5 mt-xl-0 text-white pt-md-2 fw-normal pt-5'>
                  <div className='widget'>
                    <h4 className='widget-title text-white mb-3'>
                      Get in Touch
                    </h4>
                    <address className='mb-2'>
                      <i className='uil uil-location-pin-alt me-2'></i>
                      {/* Eternal Renewables Private Limited,
                      <br /> */}
                      No. 118, Nehru Street, Rathinasabapathipuram,
                      <br />
                      T. Kottampatty, Mahalingapuram,
                      <br />
                      Pollachi, Coimbatore - 642002,
                      <br />
                      Tamil Nadu, India.
                    </address>

                    <a
                      href='mailto:ceo@eternalrenewables.com'
                      className='d-block text-white'
                    >
                      <i className='uil uil-envelope me-2'></i>
                      ceo@eternalrenewables.com
                    </a>

                    <a href='tel:+919597788792' className='d-block text-white'>
                      <i className='uil uil-phone me-2'></i>
                      +91 95977 88792
                    </a>

                    {/* <br /> +91 95977 88792 */}
                  </div>
                </div>

                {/* <div className='col-md-6  col-lg-3  col-xl-2 pt-md-2 pt-5'>
                  <div className='widget'>
                    <h4 className='widget-title text-white mb-3'>
                      Information{' '}
                    </h4>
                    <ul className='list-unstyled text-white mb-0'>
                      {footerNav.map(({ title, url }) => (
                        <li className='fw-normal' key={title}>
                          <NextLink title={title} href={url} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> */}

                {/* <div className='col-md-12 col-lg-9 col-xl-3 pt-md-4'>
                  <div className='widget'>
                    <h4 className='widget-title text-white mb-3'>
                      Our Newsletter
                    </h4>
                    <p className='mb-5 text-white'>
                      Subscribe to our newsletter to get our news &amp; deals
                      delivered to you.
                    </p>

                    <div className='newsletter-wrapper text-white'>
                      <div id='mc_embed_signup2'>
                        <form
                          method='post'
                          target='_blank'
                          className='validate dark-fields'
                          id='mc-embedded-subscribe-form2'
                          name='mc-embedded-subscribe-form'
                          action='https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a'
                        >
                          <div id='mc_embed_signup_scroll2'>
                            <div className='mc-field-group input-group form-floating'>
                              <input
                                type='email'
                                name='EMAIL'
                                id='mce-EMAIL2'
                                placeholder='Email Address'
                                className='required email form-control'
                              />

                              <label htmlFor='mce-EMAIL2'>Email Address</label>
                              <input
                                value='Join'
                                type='submit'
                                name='subscribe'
                                id='mc-embedded-subscribe2'
                                className='btn btn-primary'
                              />
                            </div>

                            <div id='mce-responses2' className='clear'>
                              <div
                                className='response'
                                id='mce-error-response2'
                                style={{ display: 'none' }}
                              />
                              <div
                                className='response'
                                id='mce-success-response2'
                                style={{ display: 'none' }}
                              />
                            </div>

                            <div
                              style={{ position: 'absolute', left: '-5000px' }}
                              aria-hidden='true'
                            >
                              <input
                                type='text'
                                tabIndex={-1}
                                name='b_ddc180777a163e0f9f66ee014_4b1bcfa0bc'
                              />
                            </div>

                            <div className='clear' />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className='col-12 col-sm-6 col-xl-4 mt-5 mt-xl-0 pt-md-2 pt-5'>
                  <div className='widget'>
                    <h4 className='widget-title text-white mb-3'>Location</h4>
                    <div className='map-container rounded-lg'>
                      <iframe
                        // className="rounded-lg"
                        src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3920.8745273781806!2d77.01946287504033!3d10.666846089475307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQwJzAwLjciTiA3N8KwMDEnMTkuMyJF!5e0!3m2!1sen!2sin!4v1745992742863!5m2!1sen!2sin'
                        width='100%'
                        height='175'
                        style={{ border: 0, borderRadius: '10px' }}
                        allowFullScreen
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                      ></iframe>

                      {/* <iframe
                        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d68038.69046733317!2d76.9734278547572!3d10.999460165491758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1741686654377!5m2!1sen!2sin'
                        width='100%'
                        height='200'
                        style={{ border: 0 }}
                        allowFullScreen
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                        title='Google Map'
                      ></iframe> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
