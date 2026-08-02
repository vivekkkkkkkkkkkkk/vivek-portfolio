import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              VIVEK
              <br />
              <span>GANJI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Cyber Security &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Software Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">App Designer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
