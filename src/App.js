import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import React from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
import Tech from "./Tech";
import Contact from "./Contact";
import "./App.css";
import "./Css.css";

AOS.init();
function App() {
  return (
    <HashRouter>
      <header class="masthead">
        <section id="page-top">
          <div class="container">
            <div class="intro-text">
              <Navbar />
              <div
                class="intro-lead-in"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Hi! My name is
              </div>
              <div
                class="intro-heading"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                Aga Dwulit.
              </div>
              <div
                class="intro-lead-in"
                data-aos="fade-up"
                data-aos-delay="1500"
              >
                I'm a Full Stack Software Engineer.
              </div>
            </div>
          </div>
        </section>
      </header>
      <About />
      <Portfolio />
      <Tech />
      <Contact />
      <footer class="footer">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-4">
              <span class="copyright">&copy; Aga Dwulit 2020</span>
            </div>
            <div class="col-md-4">
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="mailto:aga.i.dwulit@gmail.com">
                    <i class="fas fa-envelope-square"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.linkedin.com/in/agnieszka-dwulit/">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="list-inline quicklinks">
                <li class="list-inline-item">
                  <a href="*">All rights reserved.</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </HashRouter>
  );
}

export default App;
