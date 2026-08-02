import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { portfolioData } from "../data/portfolioData";
// Fallback for ScrollSmoother trial plugin
const ScrollSmoother = {
  create: () => ({
    scrollTop: () => {},
    paused: () => {},
  }),
} as unknown as { create: (opts: unknown) => { scrollTop: (v: number) => void; paused: (v: boolean) => void; scrollTo: (target: string | null, smooth: boolean, position: string) => void }; refresh: (force: boolean) => void };

gsap.registerPlugin(ScrollTrigger);
// eslint-disable-next-line react-refresh/only-export-components
export let smoother: ReturnType<typeof ScrollSmoother.create> | undefined;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother?.scrollTop(0);
    smoother?.paused(true);

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const elem = e.currentTarget as HTMLAnchorElement;
          const section = elem.getAttribute("data-href");
          smoother?.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#c481ff" fillOpacity="0.2"/>
            <path d="M9 10L16 23L23 10" stroke="#c481ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="16" cy="11" r="2" fill="#c481ff"/>
          </svg>
          <span style={{ fontWeight: 700, letterSpacing: "1px", color: "#fff" }}>VG</span>
        </a>
        <a
          href={`mailto:${portfolioData.personal.email}`}
          className="navbar-connect"
          data-cursor="disable"
        >
          {portfolioData.personal.email}
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
