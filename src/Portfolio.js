import React from "react";
import ReactPlayer from "react-player";
import Exit from "./Projects/Exit";
import Metilda from "./Projects/Metilda";
import Altai from "./Projects/Altai";
import Nala from "./Projects/Nala";
import Toto from "./Projects/Toto";
import Mogo from "./Projects/Mogo";
import mogo from "./img/mogoshot.png";
import exit from "./img/gifs/exit-optimized.gif";
import nala from "./img/gifs/nalagifgif.gif";
import altai from "./img/altaiscreenshot.png";

import "./App.css";
import "./Css.css";
import "./scss/team.scss";
import "./scss/footer.scss";
import "./scss/portfolio.scss";
import "./scss/main.scss";
import "./scss/agency.scss";
import "./css/bootstrap-grid.css";
import "./css/bootstrap.css";
import "./css/all.css";
import "./modal.css";
import "./css/bootstrap.css";
import "./scss/portfolio.scss";

function Portfolio() {
  return (
    <>
      <section class="page-section bg-light" id="portfolio">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Portfolio</h2>
          </div>
          <div class="row">
            <Exit />
            <Metilda />
            <Altai />
            <Nala />
            <Toto />
            <Mogo />
          </div>
        </div>
      </section>
      {/* exit */}
      <div
        class="modal fade"
        id="exit"
        tabindex="-1"
        role="dialog"
        aria-labelledby="portfolioModal1Label"
        aria-hidden="true"
      >
        <div className="modal-body">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <div class="modal-body">
                      <h2 class="text-uppercase">EXIT</h2>
                      <p class="item-intro text-muted">
                        Virtual Reality Escape Room
                      </p>
                      <img
                        class="img-fluid d-block mx-auto"
                        src={exit}
                        alt="..."
                      />
                      <p>
                        The game begins in an introductory space where the
                        player is greeted with the game instructions and
                        directed to search for doors. Once the player clicks on
                        the door, the game starts and they are transported to
                        the escape room and given their first clue. The player
                        is encouraged to move around and interact with 3D
                        objects to receive clues that will guide them towards
                        the exit.
                      </p>

                      <li>
                        <b>Development highlights:</b>
                        <br /> Exit is currently a frontend application but it
                        allows for the integration of backend technology to
                        allow for functionalities such as account login/OAuth
                        and score tracking with Redux store. The React360
                        library facilitated the production of a complex, c UI
                        due to its use of familiar and interactive React
                        components as well as the access to React Native’s
                        Animated library for rendering animations. Redux state
                        management library to hold the state of the current
                        background, clues, and currently enabled buttons as the
                        player progresses through the game. State reset via the
                        Redux store upon clicking the "Play Again" button.
                      </li>
                      <li>
                        <b>Challenges:</b>
                        <br /> Manually altering the camera position based on a
                        user’s input, such as relocating the camera to the
                        center of the room when a player clicks the door or
                        zooming in on the text when the player clicks on a clue.
                        Manipulating the rendered environment is functionality
                        that is only available in the rendering code, also known
                        as the runtime. The runtime is accessible from the react
                        code via native modules.
                      </li>
                      <li>
                        <b>Geeky stuff:</b>
                        <br /> Custom native module class implementation to
                        manipulate camera position and provide the React side
                        with a method retrieving the current camera position
                        vector from the main browser environment and altering it
                        to the desired position.
                      </li>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <div class="socialbubbletip">
                    <li class="list-inline-item">
                      <a href="https://stormlooper.github.io/Exit/">
                        <i class="fas fa-play"></i>
                      </a>
                    </li>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* metilda */}
      <div
        class="modal fade"
        id="metilda"
        tabindex="-1"
        role="dialog"
        aria-labelledby="metilda"
        aria-hidden="true"
      >
        <div className="modal-body">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <div class="modal-body">
                      <h2 class="text-uppercase">Metilda</h2>
                      <p class="item-intro text-muted">
                        Data-driven, AI-powered application for FB Messenger and
                        Amazon Alexa.
                      </p>
                      <div classname="modal">
                        <ReactPlayer
                          playsinline
                          fluid
                          url="https://youtu.be/Q8iAK2DcYls"
                          width="100%"
                        />
                      </div>
                      <p>
                        MET Museum's AI voice guide. Equitable UI coming soon.
                      </p>
                      <ol class="list-inline">
                        <b>Objectives: </b>
                        <br />
                        <li>
                          - Utilize React, Redux and Javascript to develop UI as
                          an equitable visual aid allowing the user to interact
                          with and manage the information cards compiled for
                          them by Metilda.{" "}
                        </li>

                        <li>
                          - Build REST APIs for interfacing with large scale
                          data sets.
                        </li>
                        <li>
                          - Design easy to use data structures for integration
                          into AI applications.
                        </li>
                        <li>
                          - Learn voice application design and machine learning
                          best practices.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* altai */}
      <div
        class="modal fade"
        id="altai"
        tabindex="-1"
        role="dialog"
        aria-labelledby="altai"
        aria-hidden="true"
      >
        <div className="modal-body">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <div class="modal-body">
                      <h2 class="text-uppercase">Altai</h2>
                      <p class="item-intro text-muted">
                        Consulting Project - Corporate Portfolio{" "}
                      </p>
                      <img
                        class="img-fluid d-block mx-auto"
                        src={altai}
                        alt="..."
                      />
                      <p>
                        My CSS experiment. Employed HTML and CSS to develop a
                        beautiful web portfolio, implementing video backrounds
                        for the first time using jQuery (thus learning jQuery).
                      </p>
                      <p>
                        Learning Objective: Gaining hands-on experience and
                        forming a better understanding of the advantages of
                        single-page web development using React frameworks, as
                        well as broadening my UI/UX design skills through
                        practice.
                      </p>
                      <p>
                        Self-education achievements: jQuery, and a deepened
                        respect for React frameworks.
                      </p>
                      <ul class="list-inline">
                        <li>Safe to say: now I know why. </li>
                        <li> Go React!</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <div class="socialbubbletip">
                    <li class="list-inline-item">
                      <a href="http://altaiventures.com">
                        <i class="fas fa-external-link-alt"></i>
                      </a>
                    </li>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Nala */}
      <div
        class="modal fade"
        id="nala"
        tabindex="-1"
        role="dialog"
        aria-labelledby="nala"
        aria-hidden="true"
      >
        <div className="modal-body">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <div class="modal-body">
                      <h2 class="text-uppercase">Nala</h2>
                      <p class="item-intro text-muted"></p>
                      <img
                        class="img-fluid d-block mx-auto"
                        src={nala}
                        alt="..."
                      />
                      <p>
                        Nala Soaps is an e-commerce website developed for an
                        artisanal soap maker in Lagos, Nigeria. The site
                        features persistent cart functionality, user and guest
                        checkout, user and third-party login, order history and
                        stock tracking.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* toto */}
      <div
        class="modal fade"
        id="toto"
        tabindex="-1"
        role="dialog"
        aria-labelledby="toto"
        aria-hidden="true"
      >
        <div className="modal-body">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <div class="modal-body">
                      <h2 class="text-uppercase">Toto Initiative</h2>
                      <p class="item-intro text-muted">
                        The IT to my Frankenstein
                      </p>
                      <div classname="modal">
                        <ReactPlayer
                          playsinline
                          fluid
                          url="https://www.youtube.com/watch?v=SpNLb0EqL8c"
                          width="100%"
                        />
                      </div>
                      <p>
                        Toto Initiative is a free platform for foster parents to
                        post pets currently available for adoption, process
                        donations and adoption applications. You already do
                        enough, let us help you help them!
                      </p>

                      <p>
                        Easy to navigate user interface built with reusable
                        components developed using React frameworks to deliver
                        optimal user experience.
                      </p>
                      <p>
                        This was my creative-struggle baby. Built from scratch
                        with React. Code base could be cleaner, but again, this
                        was my struggle babe. I learned a lot while working on
                        this project, made sense of a lot of things hanging
                        around in my brain, not fully grasped from coding
                        bootcamp's lectures. It definitelty taught me the
                        importance of clean code base, as well as all the
                        different - often messy and not always best - ways of
                        making things come to life. AND, of course, made me fall
                        in love with Redux - technologies gift to developing
                        society.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <div class="socialbubbletip">
                    <li class="list-inline-item">
                      <a href="http://totoinitiative.com/">
                        <i class="fas fa-external-link-alt"></i>
                      </a>
                    </li>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mogo */}
      <div
        class="modal fade"
        id="mogo"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mogo"
        aria-hidden="true"
      >
        <div className="modal-body">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <div class="modal-body">
                      <h2 class="text-uppercase">MOGO Pilates</h2>
                      <p class="item-intro text-muted">Brand Consultant</p>
                      <img
                        class="img-fluid d-block mx-auto"
                        src={mogo}
                        alt="..."
                      />
                      <br />

                      <p>Ongoing project. </p>
                      <p>
                        Objective: Redesign online presence, modify user
                        interface, and implement technologies to streamline
                        operations. Customize user interface using with custom
                        code components. Improve user experience to adapt to
                        significant changes in the health and fitness industry.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
