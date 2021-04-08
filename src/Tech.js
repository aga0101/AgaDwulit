import React from 'react';
import './App.css';
import './Css.css';
import'./scss/team.scss';
import'./scss/footer.scss';
import'./scss/main.scss';
import './css/bootstrap-grid.css';
import './css/bootstrap.css';
import './css/all.css';
//FRONTEND
import boot from './img/techlogo/boot.png';
import css from './img/techlogo/icons8-css3-50.png';
import html from './img/techlogo/icons8-html-5-50.png';
import jquery from './img/techlogo/icons8-jquery-50.png';
import react from './img/techlogo/icons8-react-50.png';
import reactnative from './img/techlogo/icons8-react-native-50-2.png';
import react360 from './img/techlogo/icons8-react-native-50.png';
import redux from './img/techlogo/icons8-redux-50.png';
//BACKEND
import nodejs from './img/techlogo/nodejs.png';
import express from './img/techlogo/express3.png';
import sequelize from './img/techlogo/sequelize.png';
import postgres from './img/techlogo/postgresql3.png';
//DEVOPS
import git from './img/techlogo/git.png';
import github from './img/techlogo/github.png';
import aws from './img/techlogo/aws.png';
import heroku from './img/techlogo/heroku.png';
import npm from './img/techlogo/npm.png';
import webpack from './img/techlogo/webpack.png';
//LANGUAGES
import js from "./img/techlogo/js.png";
//TOOLS
import vscode from './img/techlogo/vscode.png';
import postman from './img/techlogo/postman.png';
import postico from './img/techlogo/postico.png';
//TESTING 
import chai from './img/techlogo/chai.png';
import mocha from './img/techlogo/mocha.png';
import jasmine from './img/techlogo/jasmine.png';


function Tech() {
  return (
    <section class="bg-light page-section" id="tech">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Solutions Stack</h2>
            <h3 class="section-subheading text-muted">Hover over items for more details.</h3>
          </div>
        </div>
        <div class="row">
          {/* FRONT END */}
          <div class="col-md-4 col-sm-6 mb-3 item-center">
            <div class="portfolio-caption">
              <div class="row">
                <div class="techtooltip">
                  <img class="img-fluid" src={reactnative} width="60" height="60" alt="React" />
                  <span class="tooltiptext">React</span>
                </div>
                <div class="techtooltip">
                  <img class="img-fluid" src={react360} width="60" height="60" alt="ReactNative" />
                  <span class="tooltiptext">React Native</span>
                </div>
                <div class="techtooltip">
                  <img class="img-fluid" src={react} width="60" height="60" alt="React360" />
                  <span class="tooltiptext">React360</span>
                </div>
                <div class="techtooltip">
                  <img class="img-fluid" src={redux} width="60" height="60" alt="Redux" />
                  <span class="tooltiptext">Redux</span>
                </div>
              </div>
              <div class="row">
                <div class="techtooltip">
                  <img src={css} width="60" height="60" alt="CSS" />
                  <span class="tooltiptext">CSS</span>
                </div>
                <div class="techtooltip">
                  <img src={html} width="60" height="60" alt="HTML" />
                  <span class="tooltiptext">HTML</span>
                </div>
                <div class="techtooltip">
                  <img src={jquery} width="60" height="60" alt="jQuery" />
                  <span class="tooltiptext">jQuery</span>
                </div>
                <div class="techtooltip">
                  <img src={boot} width="60" height="60" alt="Bootstrap" />
                  <span class="tooltiptext">Bootstrap</span>
                </div>
              </div>
            </div>
            <div class="portfolio-caption">
              <h4 class="section-heading">FRONTEND</h4>
            </div>
          </div>
          {/* BACK-END */}
          <div class="col-md-4 col-sm-6 mb-3 item-center">
            <div class="portfolio-caption">
              <div class="row">
                <div class="techtooltip">
                  <img class="img-fluid" src={nodejs} width="80" height="80" alt="Nodejs" />
                  <span class="tooltiptext">Node.js</span>
                </div>
                <div class="techtooltip">
                  <img class="img-fluid" src={express} width="60" height="60" alt="Express" />
                  <span class="tooltiptext">Express</span>
                </div>
                <div class="techtooltip">
                  <img class="img-fluid" src={postgres} width="60" height="60" alt="Postgresql" />
                  <span class="tooltiptext">PostgreSQL</span>
                </div>
                <div class="techtooltip">
                  <img class="img-fluid" src={sequelize} width="60" height="60" alt="Sequelize" />
                  <span class="tooltiptext">Sequelize</span>
                </div>
              </div>
            </div>
            <div class="portfolio-caption">
              <h4>BACKEND</h4>
            </div>
          </div>
          {/* DEVOPS */}
          <div class="col-md-4 col-sm-6 mb-3 item-center">
            <div class="portfolio-caption">
              <div class="row">
                <div class="techtooltip">
                  <img class="img-fluid" src={npm} width="60" height="60" alt="npm" />
                  <span class="tooltiptext">npm</span>
                </div>
                <div class="techtooltip">
                  <img class="img-fluid" src={git} width="60" height="60" alt="Git" />
                  <span class="tooltiptext">Git</span>
                </div>
                <div class="techtooltip">
                  <img class="img-fluid" src={github} width="60" height="60" alt="Github" />
                  <span class="tooltiptext">Github</span>
                </div>
                <div class="techtooltip">
                  <img class="img-fluid" src={webpack} width="60" height="60" alt="Webpack" />
                  <span class="tooltiptext">Webpack</span>
                </div>
              </div>
              <div class="row">
                <div class="techtooltip">
                  <img src={aws} width="60" height="60" alt="AWS" />
                  <span class="tooltiptext">AWS</span>
                </div>
                <div class="techtooltip">
                  <img src={heroku} width="60" height="60" alt="Heroku" />
                  <span class="tooltiptext">Heroku</span>
                </div>
              </div>
            </div>
            <div class="portfolio-caption">
              <h4>DEVOPS</h4>
            </div>
          </div>
          {/* SECTION 4 */}
          <div class="col-md-4 col-sm-6 mb-3 item-center">
            <div class="portfolio-caption">
              <div class="row">
                <div class="techtooltip">
                  <img class="img-fluid" src={vscode} width="60" height="60" alt="VSCode" />
                  <span class="tooltiptext">Visual Studio Code</span>
                </div>
                <div class="techtooltip">
                  <img class="img-fluid" src={postman} width="60" height="60" alt="Postman" />
                  <span class="tooltiptext">Postman</span>
                </div>
                <div class="techtooltip">
                  <img class="img-fluid" src={postico} width="60" height="60" alt="Postico" />
                  <span class="tooltiptext">Postico</span>
                </div>
              </div>
            </div>
            <div class="portfolio-caption">
              <h4>TOOLS</h4>
            </div>
          </div>
          {/* SECTION 5 */}
          <div class="col-md-4 col-sm-6 mb-3 item-center">
            <div class="portfolio-caption">
              <div class="row">
                <div class="techtooltip">
                  <img class="img-fluid" src={js} width="60" height="60" alt="JS" />
                  <span class="tooltiptext">JavaScript</span>
                </div>
              </div>
            </div>
            <div class="portfolio-caption">
              <h4>LANGUAGES</h4>
            </div>
          </div>
          {/* SECTION 6 */}
          <div class="col-md-4 col-sm-6 mb-3 item-center">
            <div class="portfolio-caption">
              <div class="row">
                <div class="techtooltip">
                  <img class="img-fluid" src={jasmine} width="60" height="60" alt="Jasmine" />
                  <span class="tooltiptext">Jasmine</span>
                </div>
                <div class="techtooltip">
                  <img class="img-fluid" src={chai} width="60" height="60" alt="Chai" />
                  <span class="tooltiptext">Chai</span>
                </div>
                <div class="techtooltip">
                  <img class="img-fluid" src={mocha} width="60" height="60" alt="Mocha" />
                  <span class="tooltiptext">Mocha</span>
                </div>
              </div>
            </div>
            <div class="portfolio-caption">
              <h4>TESTING</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;