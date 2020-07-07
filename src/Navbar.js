import React from 'react';
import './Css.css';
import './scss/navbar.scss';

const Navbar = (props) => {
  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    let nav = document.getElementById("mainNav");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      if (!nav.className.match(/fixed-nav/g)) {
        nav.className = `${nav.className} fixed-nav`;
      }
    } else {
      // document.getElementById("mainNav").style.padding = "80px 10px";
      nav.className = nav.className.replace(/fixed-nav/g, '');
    }
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" id="mainNav">
    
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Aga Dwulit</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>

      <div class="navbar-collapse collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#tech">
              Technologies
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
  </nav>
  )
}

export default Navbar