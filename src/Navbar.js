import React from 'react';
import './Css.css';
import './scss/navbar.scss';

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Aga Dwulit</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">
              <b href="#about">About Me</b>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#portfolio">
              <b href="#portfolio">Portfolio</b>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#tech">
              <b href="#tech">Technologies</b>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">
              <b href="#contact">Contact</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar