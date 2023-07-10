import React from 'react';
import Container from 'react-bootstrap/Container';
// import Card from "react-bootstrap/Card";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ArrowForward from '@mui/icons-material/ArrowForward';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import longArrow from './assets/long-arrow.svg'


function Portfolio() {
  return (
    <div className='main-container'>
        <div class="wrapper">
          <div class="contents">
            <Container fluid className='top-frame'>
              <div className='header'>
                <div className='nav-bar' lg='auto'>
                  <div class="current">
                    <div class="inner-frame">
                      <p>Home Page</p>
                      <div class="arrow-icon">
                        <ArrowForward className='prop'/>
                        <ArrowForward className='prop'/>
                      </div>
                    </div>
                  </div>
                  <div class="menu">
                    <div class="inner-frame">
                      <p>Menu</p>
                    </div>
                  </div>
                  <div class="sections">
                    <div class="portfolio">
                      <p>Portfolio</p>
                      <div class="tab">
                        <p>190+</p>
                      </div>
                    </div>
                    <div class="category">
                      <p>Category</p>
                      <div class="tab">
                        <p>Collections</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='social-icons'>
                  <div class="icons">
                    <Facebook className='props'/>
                  </div>
                  <div class="icons">
                    <Twitter className='props'/>
                  </div>
                  <div class="icons">
                    <Instagram className='props'/>
                  </div>
                </div>
              </div>
              <Container fluid className='main'>
                <div className='auth-card'>
                    <div className='auth-details'>
                      <div className='auth-name'>
                        <h1>Nicolas Simons -</h1>
                      </div>
                      <div className='role'>
                        <div className='inner-area'>
                          <div className='general'>
                            <p>Support Manager</p>
                            <div className='arrow-icon'>
                              <ArrowForward className='props'/>
                              <ArrowForward className='props'/>
                            </div>
                          </div>
                          <div className='specific'>
                            <p>Art Director - MetroLab</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='auth-profile'>
                      <div className='profile-img image'>
                      </div>
                      <div className='donation-btn'>
                        <p>Send Donation</p>
                      </div>
                    </div>
                  </div>
                <div className='description-section'>
                  <div className='tabs'>
                    <div className='tab'><p>ART DIRECTOR</p></div>
                    <div className='tab'><p>12 DECEMBER 2022</p></div>
                    <div className='tab'><p>PORTFOLIO</p></div>
                  </div>
                  <div className='description'>
                    <p>MetroLab / 2023© creates interesting website dashboard design for company artists and photographers.</p>
                  </div>
                </div>
              </Container>
              <Container fluid className='posts'>
                <div className='latest-post'>
                  <div className='header'>
                    <div className='tab'>
                      <p>LATEST POST</p>
                    </div>
                    <div className='arrow-icon'>
                      <ArrowForward className='props'/>
                      <ArrowForward className='props'/>
                  </div>
                  </div>
                  <div className='post-img'>
                    <div className='img-holder image'></div>
                  </div>
                  <div className='title'>
                    <p>Design Generate</p>
                    <div className='views'>
                      <p>45k views</p>
                    </div>
                  </div>
                  <div className='h-line'></div>
                  <div className='description'>
                    <p>
                      Testing Popular <strong><u>designing tools</u></strong> and evaluating them with MetroLab crew and artists.
                    </p>
                  </div>
                </div>
                <div className='favorite-post'>
                  <div className='header'>
                    <div className='tab'>
                      <p>FAVORITE POST</p>
                    </div>
                    <div className='arrow-icon'>
                      <ArrowForward className='props'/>
                      <ArrowForward className='props'/>
                    </div>
                  </div>
                  <div className='data'>
                    <p>Training new Participants</p>
                    <div className='value'>
                      <p>38.2</p>
                    </div>
                  </div>
                </div>
                <div className='statistics'>
                  <div className='header'>
                    <div className='tab'>
                      <p>STATISTICS</p>
                    </div>
                    <div className='arrow-icon'>
                      <ArrowForward className='props'/>
                      <ArrowForward className='props'/>
                    </div>
                  </div>
                  <div className='data'>
                    <p>Training new Participants</p>
                    <div className='graph'>
                      <div className='vbars'>
                        <div className='bar val1'></div>
                        <div className='bar val2'></div>
                        <div className='bar val3'></div>
                        <div className='bar val4'></div>
                        <div className='bar val5'></div>
                        <div className='bar val6'></div>
                      </div>
                      <div className='h-line'></div>
                    </div>
                  </div>
                </div>
              </Container>
            </Container>
            <Container fluid className='footer'>
              <div className='date'>
                <p>16 DECEMBER 2022</p>
              </div>
              <div className='h-line'></div>
              <div className='sections'>
                <div className='left-section'>
                  <p>01</p>
                  <p>ALL RIGHTS RESERVED ©2022</p>
                </div>
                <div className='right-section'>
                  <div className='links'>
                    <p>COOPERATION</p>
                    <p className='ms-4'>ENGLISH</p>
                  </div>
                  <div className='get-started'>
                    <div className='long-arrow'>
                      <img src={longArrow} alt='long arrow'/>
                    </div>
                    <p>GET STARTED</p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
    </div>
  );
}

export default Portfolio;
