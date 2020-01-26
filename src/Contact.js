import React from 'react';
import './css/all.css';
import './App.css';
import './Css.css';
import'./scss/team.scss';
import'./scss/footer.scss';
import'./scss/main.scss';
import './css/bootstrap-grid.css';
import './css/bootstrap.css';

function Contact() {
  return (
    <section class="page-section2" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase" text-color="white">CONTACT</h2>
            <h3 class="section-subheading text-unmuted" text-color="white" text-style="obligue">Hover over the bubbles for more details. </h3>
          </div>
        </div>


        <div class="container">

        <div class="col-md-4 socialbubbletip text-center">
          <span class="fa-stack fa-4x">
            <a href="mailto:aga.i.dwulit@gmail.com">
            <i class="fas fa-circle fa-stack-2x" item-color="#fed136"></i>
            <i class="fas fa-envelope-open-text fa-stack-1x fa-inverse"></i>
          <span class="socialbubbletiptext2">aga.i.dwulit@gmail.com</span>
          </a>
          </span>
          <h4 class="service-heading">e-mail</h4>
          {/* <p class="text-muted2">Click on the bubble to start your message or hover over the bubble for details.</p> */}
        </div>

        <div class="col-md-4 socialbubbletip text-center">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fas fa-phone fa-stack-1x fa-inverse"></i>
            <span class="socialbubbletiptext2">(773)  574 - 7898</span>
          </span>
          <h4 class="service-heading">phone</h4>
          {/* <p class="text-muted2">Hover over the bubble for details.</p> */}
        </div>

        <div class="col-md-4 socialbubbletip text-center">
          <span class="fa-stack fa-4x">
          <a href="https://www.linkedin.com/in/agnieszka-dwulit/">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fab fa-linkedin fa-stack-1x fa-inverse"></i>
            </a>
          </span>
          <h4 class="service-heading">LinkedIn</h4>
          {/* <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p> */}
        </div>
      </div>
    </div>
  </section>
 
  );
}

export default Contact;