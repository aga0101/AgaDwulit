import React from 'react';
import './App.css';
import './Css.css';
import './scss/team.scss';
import './scss/footer.scss';
import './scss/portfolio.scss';
import './scss/main.scss';
import './scss/agency.scss';
import './css/bootstrap-grid.css';
import './css/bootstrap.css';
import './css/all.css';
import exit from "./img/gifs/exit-optimized.gif";
import pp from "./img/gifs/potions-optimized.gif";
import toto from "./img/gifs/toto-optimized.gif";

function Portfolio() {
  return (
    <section class="bg-light page-section" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Portfolio</h2>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
              {/*
              <!-- Project Details Go Here --> */}
              <h2 class="text-uppercase"><b>Toto</b></h2>
              {/* <p class="item-intro text-muted">Coming Soon!</p> */}
              <p class="item-intro text-muted mb-3">Toto Initiative is a service that connects pet lovers with
                animal shelters to streamline donations, volunteering, and adoptions. </p>
              <div align="left">
                <img class="img-fluid d-block" src={toto} alt="" />
              </div>
              <ul class="list-inline text-muted mt-3">
                <li><b>Category:</b> Social Media</li>
                <li><b>Developed by:</b>Aga Dwulit</li>
                <li><b>Solutions stack:</b> Node.js, Javascript, React, React-Native, Redux, express.js, Sequelize,
                  PostgreSQL, Postico, OAuth, HTML, CSS, Bootstrap, AWS (Api Gateway, Lambda, S3, Cloudfront)</li>
              </ul>
              <div class="team-member">
                <ul class="list-inline social-buttons">
                  <div class="socialbubbletip">
                    <li class="list-inline-item">
                      <a href="http://totoinitiative.com/">
                        <i class="fas fa-external-link-alt"></i>
                      </a>
                    </li>
                  </div>
                  <div class="socialbubbletip">
                    <li class="list-inline-item">
                      {/* <a href="https://github.com/StormLooper/Exit">
                        <i class="fab fa-github"></i>
                      </a> */}
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
              <h2 class="text-uppercase"><b>EXIT</b></h2>
              <p class="item-intro text-muted mb-3">Exit is a cross-platform virtual reality escape room developed
                with the interactive experience in mind. The players are encouraged to move around and
                interact with 3D objects to receive clues that will guide them towards their escape.</p>
              <div align="left">
                <img class="img-fluid d-block" height="304" width="480" src={exit} alt="exit" />
              </div>
              <ul class="list-inline text-muted mt-3">
                <li><b>Category:</b> Virtual Reality/Cross Platform</li>
                <li><b>Development time:</b> 2 weeks</li>
                <li><b>Developed by:</b> Aga Dwulit, Wesam Abdelzaher, Nuzhat Tani Tabassum, Katarzyna Wegorek</li>
                <li><b>Solutions stack:</b> Node.js, Javascript, React, React360, ReactVR, React-Native, Redux,
                  HTML, CSS </li>
              </ul>
              <div class="team-member">
                <ul class="list-inline social-buttons">
                  <div class="socialbubbletip">
                    <li class="list-inline-item">
                      <a href="https://stormlooper.github.io/Exit/">
                        <i class="fas fa-external-link-alt"></i>
                      </a>
                    </li>
                  </div>
                  <div class="socialbubbletip">
                    <li class="list-inline-item">
                      <a href="https://github.com/StormLooper/Exit">
                        <i class="fab fa-github"></i>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
              <h2 class="text-uppercase"><b>Pattie's Potions</b></h2>
              <p class="item-intro text-muted mb-3">Pattie's Potions is a mock e-commerce website for consumers to
                purchase magic potions. The site features persistent cart functionality, user and guest
                checkout, user and third-party login, order history and stock tracking. </p>
              
              <div align="left">
                <img class="img-fluid d-block" height="304" width="480" src={pp} alt="" />
              </div>
              
              <ul class="list-inline text-muted mt-3">
                <li><b>Category:</b> E-Commerce</li>
                <li><b>Development time:</b> 1 week</li>
                <li><b>Developed by:</b> Aga Dwulit, Harmony Richman, Devis Mejia, Greta Gadbois</li>
                <li><b>Solutions stack:</b> Node.js, Javascript, React, Redux, express.js, Sequelize, PostgreSQL,
                  Postico, OAuth, HTML, CSS </li>
              </ul>
              <div class="team-member">
                <ul class="list-inline social-buttons">
                  <div class="socialbubbletip">
                    <li class="list-inline-item">
                      <a href="https://codecodepuffs-graceshopper.herokuapp.com/">
                        <i class="fas fa-external-link-alt"></i>
                      </a>
                    </li>
                  </div>
                  <div class="socialbubbletip">
                    <li class="list-inline-item">
                      <a href="https://github.com/grace-shopper-codecodepuffs/grace-shopper">
                        <i class="fab fa-github"></i>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
    );
  }
  
  export default Portfolio;
 



//CODE NOT READY TO BE DISCARTED. 
       /*  
          <div class="row">
            <div class="col-md-4 col-sm-6 portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt=""/>
              </a>
              <div class="portfolio-caption">
                <h4>Threads</h4>
                <p class="text-muted">Illustration</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt=""/>
          </a>
          <div class="portfolio-caption">
            <h4>Explore</h4>
            <p class="text-muted">Graphic Design</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/03-thumbnail.jpg" alt=""/>
          </a>
          <div class="portfolio-caption">
            <h4>Finish</h4>
            <p class="text-muted">Identity</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/04-thumbnail.jpg" alt=""/>
          </a>
          <div class="portfolio-caption">
            <h4>Lines</h4>
            <p class="text-muted">Branding</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/05-thumbnail.jpg" alt=""/>
          </a>
          <div class="portfolio-caption">
            <h4>Southwest</h4>
            <p class="text-muted">Website Design</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal6">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/06-thumbnail.jpg" alt=""/>
          </a>
          <div class="portfolio-caption">
            <h4>Window</h4>
            <p class="text-muted">Photography</p>
          </div>
        </div>
      </div> */

