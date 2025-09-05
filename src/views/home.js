import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Blake's landing page</title>
        <meta property="og:title" content="Blake's landing page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-left-side">
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon1">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <div className="home-links-container1">
              <span className="home-link1 Anchor">Research</span>
              <span className="home-link2 Anchor">Teaching</span>
              <span className="home-link3 Anchor">About</span>
              <span className="home-link4 Anchor">Creative Work</span>
            </div>
          </div>
          <div className="home-right-side"></div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container2">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image1"
              />
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container2">
              <span className="home-link5 Anchor">Resources</span>
              <span className="home-link6 Anchor">Inspiration</span>
              <span className="home-link7 Anchor">Process</span>
              <span className="home-link8 Anchor">Our story</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container3">
        <span className="home-text1">
          <span className="home-text2">Blake Gillespie, PhD</span>
          <br className="home-text3"></br>
          <span className="home-text4">Professor of Biochemistry</span>
          <br className="home-text5"></br>
          <span className="home-text6">Cal State Channel Islands</span>
          <br></br>
        </span>
        <div className="home-container4">
          <div className="home-hero">
            <img
              alt="image"
              src="/blake's images/blake1-600w.png"
              className="home-image2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
