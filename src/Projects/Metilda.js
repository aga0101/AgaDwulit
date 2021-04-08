import React from "react";
import metildalogo from "../img/metildalogo.png";

const Metilda = () => {
  return (
    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#metilda">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src={metildalogo} alt="..." />
        </a>
        <div class="portfolio-caption">
          <div class="portfolio-caption-heading">Metilda</div>
          <div class="portfolio-caption-subheading text-muted">
            React, Redux, JavaScript, API Gateway, AWS Lambda, RDS, S3,
            DynamoDB, Amazon Alexa
          </div>
        </div>
      </div>
    </div>
  );
};
export default Metilda;
