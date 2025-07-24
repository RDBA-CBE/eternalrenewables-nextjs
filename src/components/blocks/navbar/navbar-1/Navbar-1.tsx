'use client';

import { Fragment, ReactElement, useRef } from 'react';
import clsx from 'clsx';
// -------- CUSTOM HOOKS -------- //
import useSticky from 'hooks/useSticky';
import useNestedDropdown from 'hooks/useNestedDropdown';
// -------- CUSTOM COMPONENTS -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
// LOCAL CUSTOM COMPONENTS
import Info from '../components/Info';
import Search from '../components/search';
import Signin from '../components/signin';
import Signup from '../components/signup';
import MiniCart from '../components/mini-cart';
import HeaderRight from '../components/header-right';
import FancyHeader from '../components/fancy-header';
import BlogNavItem from '../components/blog-nav-item';
import DemosNavItem from '../components/demos-nav-item';
import PagesNavItem from '../components/pages-nav-item';
import BlocksNavItem from '../components/blocks-nav-item';
import ProjectsNavItem from '../components/projects-nav-item';
import DocumentationNavItem from '../components/documentation-nav-item';
import LetsConnect from '../components/LetsConnect';
import MediaNavItem from '../components/media-nav-item';
import WhyChooseUsNavItem from '../components/why-choose-us-nav-item';
import Link from 'next/link';
import WhatWeDoNavItem from '../components/what-we-do-item';

// ===================================================================
interface NavbarProps {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
}
// ===================================================================

export default function NavbarOne({
  fancy,
  button,
  logoAlt,
  cart = false,
  info = false,
  social = false,
  search = false,
  language = false,
  stickyBox = true,
  navOtherClass = 'navbar-other w-100 d-flex ms-auto d-lg-none text-orange1',
  navClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light ',
}: NavbarProps) {
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark';

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className='navbar-brand w-100'>
        <NextLink
          href='/'
          title={
            <img
              alt='logo'
              src={`/img/sandbox-logo/header-logo.png`}
              srcSet={`/img/sandbox-logo/header-logo.png`}
            />
          }
        />
      </div>

      <div
        id='offcanvas-nav'
        data-bs-scroll='true'
        className='navbar-collapse offcanvas offcanvas-nav offcanvas-start bg-soft-primary'
      >
        <div className='offcanvas-header d-lg-none'>
          <img
            className='text-white mb-0'
            alt='logo'
            src={`/img/sandbox-logo/header-logo.png`}
            srcSet={`/img/sandbox-logo/header-logo.png`}
            style={{ width: '70%' }}
          />

          <button
            type='button'
            aria-label='Close'
            data-bs-dismiss='offcanvas'
            className='btn-close text-orange1 ms-auto'
          />
        </div>

        <div className='offcanvas-body ms-lg-auto d-flex flex-column h-100'>
          <ul className='navbar-nav'>
            <li className='nav-item '>
              <Link href='/' className='nav-link text-blue '>
                Home
              </Link>
            </li>

            {/* <li className="nav-item ">
            <a href="projects"  className="nav-link text-blue" >
            Projects
              </a>
            </li>
             */}

            {/* <li className="nav-item ">
            <a href="whatwedo"  className="nav-link text-blue" >
            What We Do
              </a>
            </li> */}
            <WhatWeDoNavItem />
            {/* <li className="nav-item ">
            <Link href="/projects"  className="nav-link text-blue " >
              Projects
              </Link>
            </li> */}
            <ProjectsNavItem />

            <li className='nav-item '>
              <a href='howwedo' className='nav-link text-blue'>
                How We Do
              </a>
            </li>

            <li className='nav-item '>
              <a href='whychooseus' className='nav-link text-blue'>
                Why Choose Us
              </a>
            </li>
            {/* <WhyChooseUsNavItem/> */}

            {/* <li className='nav-item '>
              <a href='media' className='nav-link text-blue'>
                Media
              </a>
            </li> */}

            <MediaNavItem/>

            <li className='nav-item '>
              <a href='contactus' className='nav-link text-blue'>
                Let's Connect
              </a>
            </li>

            {/* <li className="nav-item ">
            <a href="about"  className="nav-link text-blue" >
              About
              </a>
            </li>

            <li className="nav-item ">
            <a href="business"  className="nav-link text-blue" >
            Business
              </a>
            </li>

            <li className="nav-item ">
            <a href="projects"  className="nav-link text-blue" >
            Projects
              </a>
            </li>

            <li className="nav-item ">
            <a href="technologies"  className="nav-link text-blue" >
            Technologies
              </a>
            </li>

            <li className="nav-item ">
            <a href="sustainability"  className="nav-link text-blue" >
            Sustainability
              </a>
            </li>

            <li className="nav-item ">
            <a href="news&events"  className="nav-link text-blue" >
            News & Events
              </a>
            </li>

            <li className="nav-item ">
            <a href="contactus"  className="nav-link text-blue" >
            Contact Us
              </a>
            </li> */}

            {/* ===================== demos nav item ===================== */}
            {/* <DemosNavItem /> */}

            {/*  ===================== pages nav item  ===================== */}
            {/* <PagesNavItem /> */}

            {/* ===================== projects nav item  ===================== */}
            {/* <ProjectsNavItem /> */}

            {/* ===================== blog nav item ===================== */}
            {/* <BlogNavItem /> */}

            {/* ===================== blocks nav item ===================== */}
            {/* <BlocksNavItem /> */}

            {/* ===================== documentation nav item ===================== */}
            {/* <DocumentationNavItem /> */}

            {/* <LetsConnect/> */}
          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          {/* <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title="info@email.com" className="link-inverse" href="mailto:first.last@email.com" />
              <br />
              <NextLink href="tel:0123456789" title="00 (123) 456 78 90" />
              <br />
              <SocialLinks />
            </div>
          </div> */}
        </div>
      </div>

      {/* ============= right side header content ============= */}
      <HeaderRight
        cart={cart}
        // info={info}
        button={button}
        search={search}
        social={social}
        // language={language}
        navOtherClass={navOtherClass}
      />
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox ? (
        <div
          style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }}
        />
      ) : null}

      <nav
        ref={navbarRef}
        className={clsx(navClassName, {
          'navbar-clone fixed navbar-stick': sticky,
        })}
      >
        {fancy ? (
          <FancyHeader>{headerContent}</FancyHeader>
        ) : (
          <div className='container flex-lg-row flex-nowrap align-items-center'>
            {headerContent}
          </div>
        )}
      </nav>

      {/* ============= signin modal ============= */}
      <Signin />

      {/* ============= signup modal ============= */}
      <Signup />

      {/* ============= info sidebar ============= */}
      {info ? <Info /> : null}

      {/* ============= show search box ============= */}
      {search ? <Search /> : null}

      {/* ============= cart sidebar ============= */}
      {cart ? <MiniCart /> : null}
    </Fragment>
  );
}
