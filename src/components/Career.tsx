import "./styles/Career.css";
import { portfolioData } from "../data/portfolioData";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {portfolioData.experience.map((exp, index) => (
            <div className="career-info-box" key={`exp-${index}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.role}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{exp.period}</h3>
              </div>
              <p>
                {exp.details.join(" ")}
              </p>
            </div>
          ))}
          {portfolioData.education.map((edu, index) => (
            <div className="career-info-box" key={`edu-${index}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{edu.degree}</h4>
                  <h5>{edu.institution} {edu.grade ? `| ${edu.grade}` : ""}</h5>
                </div>
                <h3>{edu.period}</h3>
              </div>
              <p>
                Academic program focusing on Computer Science, Engineering, and Cyber Security fundamentals.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
