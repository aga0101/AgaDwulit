import React from "react";
import "./App.css";
import "./Css.css";
import "./scss/team.scss";
import "./scss/footer.scss";
import "./scss/main.scss";
import "./css/bootstrap-grid.css";
import "./css/bootstrap.css";
import "./css/all.css";
import aga from "./img/squarephoto.jpg";

function About() {
  return (
    <section class="bg-light page-section" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">About Me</h2>
            <h3 class="section-subheading text-muted text-center">
              Hello! My name is Aga and I am a Fullstack Software Engineer based
              in Manhattan, New York.
              {/*  After having worked in the education and
              insurance industries for about 5 years, I decided to take a leap
              of faith and pursue my dream of becoming a software engineer. I
              graduated from the{" "}
              <a class="dark-link" href="https://www.gracehopper.com/">
                {" "}
                Grace Hopper Program{" "}
              </a>{" "}
              at the{" "}
              <a class="dark-link" href="https://www.fullstackacademy.com/">
                {" "}
                Fullstack Academy of Code{" "}
              </a>{" "}
              in December 2019. Since then I have worked on various projects
              with the goal of broadening my skillset. After almost two years of
              fullstack development, I found myself organically shifting towards
              UI/UX design and development. I am currently enrolled in Google's
              UX Design course pursuing the UX Design Professional Certificate. */}
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <div class="team-member">
              <img
                class="mx-auto rounded-circle-single"
                src={aga}
                alt="aga"
                height="75"
                width="65"
              />
              <h4>Agnieszka Dwulit</h4>
              <p class="text-muted">"Aga"</p>
              <ul class="list-inline social-buttons">
                <div class="socialbubbletip">
                  <li class="list-inline-item">
                    <a href="mailto:aga.i.dwulit@gmail.com">
                      <i class="fas fa-envelope-square"></i>
                      <span class="socialbubbletiptext">E-mail</span>
                    </a>
                  </li>
                </div>
                <div class="socialbubbletip">
                  <li class="list-inline-item">
                    <a href="https://www.linkedin.com/in/agnieszka-dwulit/">
                      <i class="fab fa-linkedin-in"></i>
                      <span class="socialbubbletiptext">LinkedIn</span>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h3 class="section-subheading text-muted">
              "A ship in port is safe, but that is not what ships are built for.
              Sail out to sea and do new things." Admiral Grace Hopper
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
