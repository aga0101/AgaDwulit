import React from "react";
import altailogo from "../img/altailogo.png";

const Altai = () => {
  return (
    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#altai">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src={altailogo} alt="..." />
        </a>
        <div class="portfolio-caption">
          <div class="portfolio-caption-heading">Altai Ventures</div>
          <div class="portfolio-caption-subheading text-muted">
            JavaScript, HTML, CSS, jQuery, S3
          </div>
        </div>
      </div>
    </div>
  );
};
export default Altai;
