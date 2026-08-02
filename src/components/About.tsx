import "./styles/About.css";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          {portfolioData.personal.about}
        </p>
      </div>
    </div>
  );
};

export default About;
