import React from "react";
import exitlogo from "../img/exitlogo.png";

function Exit() {
  return (
    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#exit">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src={exitlogo} alt="..." />
        </a>
        <div class="portfolio-caption">
          <div class="portfolio-caption-heading">EXIT VR Escape Room </div>
          <div class="portfolio-caption-subheading text-muted">
            JavaScript, React360, Redux, React Native
          </div>
        </div>
      </div>
    </div>
  );
}
export default Exit;
