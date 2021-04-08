import React from "react";
import nalalogo from "../img/nalalogo.png";

const Nala = () => {
  return (
    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#nala">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src={nalalogo} alt="..." />
        </a>
        <div class="portfolio-caption">
          <div class="portfolio-caption-heading">Nala Soaps</div>
          <div class="portfolio-caption-subheading text-muted">
            React, Redux, Express.js, Sequelize, PostgreSQL, Auth0, HTML, CSS,
            Javascript
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nala;
