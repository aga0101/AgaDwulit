import React from 'react';
import {HashRouter} from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Tech from './Tech';
import Contact from './Contact';
import './App.css';
import './Css.css';

function App() {
  return (
    <HashRouter>
      <header class="masthead">
        <section id="page-top">
          <div class="container">
            <div class="intro-text">
              <Navbar/>
            <div class="intro-lead-in">I'm Aga, a full stack software engineer.</div>
            <div class="intro-heading text-uppercase"></div>
              {/* <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#about">Tell Me More</a> */}
            </div>
          </div>
        </section>
      </header>
        <About/>
        <Portfolio/>
        <Tech/>
        <Contact/>
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
                  <li class="list-inline-item">
                    <a href='https://github.com/aga0101'>
                    <i class="fab fa-github"></i>
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
