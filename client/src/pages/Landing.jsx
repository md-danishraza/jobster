import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Job hunting is stressful enough. Spreadsheets get messy, emails get
            lost, and opportunities slip through the cracks. <b>Jobster</b>{" "}
            gives you a single, elegant dashboard to manage every step of your
            journey—from first click to final offer.{" "}
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
