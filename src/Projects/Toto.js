import React from "react";
import totologo from "../img/totologo.png";

const Toto = () => {
  return (
    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#toto">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src={totologo} alt="..." />
        </a>
        <div class="portfolio-caption">
          <div class="portfolio-caption-heading">Toto Initiative</div>
          <div class="portfolio-caption-subheading text-muted">
            React, Redux, Express.js, Sequelize, PostgreSQL, Auth0, HTML, CSS,
            Bootstrap, AWS (Api Gateway, Lambda, S3, Cloudfront)
          </div>
        </div>
      </div>
    </div>
  );
};
export default Toto;
