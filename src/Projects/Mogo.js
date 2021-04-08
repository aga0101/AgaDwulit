import React from "react";
import MOGO from "../img/MOGO.png";

function Mogo() {
  return (
    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#mogo">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src={MOGO} alt="..." />
        </a>
        <div class="portfolio-caption">
          <div class="portfolio-caption-heading">Mogo Pilates </div>
          <div class="portfolio-caption-subheading text-muted">
            JavaScript, Squarespace, Mailchimp, Acuity
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mogo;
