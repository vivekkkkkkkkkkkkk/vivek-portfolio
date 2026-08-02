import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    const containers = containerRef.current;
    const listeners: { container: HTMLDivElement; handler: () => void }[] = [];
    if (ScrollTrigger.isTouch) {
      containers.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          const handler = () => handleClick(container);
          container.addEventListener("click", handler);
          listeners.push({ container, handler });
        }
      });
    }
    return () => {
      listeners.forEach(({ container, handler }) => {
        container.removeEventListener("click", handler);
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DEVELOP & SECURE</h3>
              <h4>Description</h4>
              <p className="para">
                As a Computer Science Engineering student specializing in Cyber Security, I engineer resilient, high-availability software applications built on secure development lifecycle (SDLC) principles. My technical proficiency includes object-oriented programming in Python, Java, C++, and SQL, alongside cloud database integration via Firebase. On the cyber security front, I possess practical experience in regulatory compliance analysis, security policy interpretation, vulnerability risk assessment, financial/telecom due diligence, and digital forensics using Autopsy. I excel at converting complex security requirements into scalable software defenses—most notably architecting an MSME telecom fraud detection framework to identify and mitigate malicious communication patterns.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">Java</div>
                <div className="what-tags">C++</div>
                <div className="what-tags">SQL</div>
                <div className="what-tags">Firebase</div>
                <div className="what-tags">Security & Risk Assessment</div>
                <div className="what-tags">Telecom Fraud Detection</div>
                <div className="what-tags">Digital Forensics (Autopsy)</div>
                <div className="what-tags">Regulatory Analysis</div>
                <div className="what-tags">Data Structures & Algorithms</div>
                <div className="what-tags">Analytical Problem Solving</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>APP DESIGN & UX</h3>
              <h4>Description</h4>
              <p className="para">
                Drawing from my professional experience as an Application Designer at PhoneticEdu (2024–2026), I specialize in designing visually striking, user-centric interface layouts and high-fidelity interactive prototypes across web and mobile platforms. I seamlessly bridge the gap between engineering teams and product strategy by translating intricate software requirements into clear, functional features. My human-centered design approach incorporates structured user research, interactive wireframing, and iterative usability testing to eliminate friction points, refine accessibility, and deliver engaging user experiences.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">UI/UX Layout Design</div>
                <div className="what-tags">Wireframing</div>
                <div className="what-tags">Interactive Prototyping</div>
                <div className="what-tags">User Research</div>
                <div className="what-tags">Usability Testing</div>
                <div className="what-tags">Web & Mobile UX</div>
                <div className="what-tags">HTML & CSS</div>
                <div className="what-tags">Design Systems</div>
                <div className="what-tags">Cross-Functional Collaboration</div>
                <div className="what-tags">Workflow Optimization</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>LEADERSHIP & INNOVATION</h3>
              <h4>Description</h4>
              <p className="para">
                Proven track record leading cross-functional teams in national hackathons including Smart India Hackathon (SIH Team Leader) and MSME Hackathon. Skilled in public speaking, project management, and organizing community outreach as an NSS Volunteer.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Team Leadership</div>
                <div className="what-tags">Project Management</div>
                <div className="what-tags">Public Speaking</div>
                <div className="what-tags">Hackathon Winner</div>
                <div className="what-tags">NSS Community Leadership</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
