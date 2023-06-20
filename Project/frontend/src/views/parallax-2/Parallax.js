import "./styles.css";

import photo1 from "./photo1.png";
import photo2 from "./photo2.png";
import photo3 from "./photo3.png";
import photo4 from   "./photo4.png";
import background from "../parallax-2/background.svg"
import Logo from "../parallax-2/Logo.png"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import React from "react";
import { useEffect, useRef } from "react";

export const Parallax = () => {
  const containerRef = useRef();

  const setupScrollTrigger = () => {
    const sections = gsap.utils.toArray(".panel");
      // gsap.registerPlugin(ScrollTrigger);


    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  };

  setupScrollTrigger();

  return (
    <>
      <section className="banner">
        <img src={Logo} alt="image1" />
        <div className="banner-content">
          {/* <h2>Shantha Motors</h2>
          <h3>Spare parts sale and vehicle renting </h3> */}
        </div>
      </section>
      <div ref={containerRef} className="container">
        <section className="description panel blue">
          <img src={photo1} alt="image1" />
          <h2>We are online now</h2>
          <p>
            We're excited to announce that our store is now available online!
            For years, we've been providing high-quality products and services
            to our local community, and now we're expanding our reach to
            customers worldwide
          </p>
        </section>
        <section className="panel red">
          <img src={photo2} alt="image1" />
          <h2>Buy Authentic Products Online!</h2>
          <p>
            Looking for genuine spare parts for your car? You've come to the
            right place! Our online store offers a wide selection of
            high-quality car spare parts that you can conveniently browse and
            purchase from the comfort of your own home
          </p>
        </section>
        <section className="description panel blue">
          <img src={photo3} alt="image1" />
          <h2>Rent a Vehicle </h2>
          <p>
            Planning a dream vacation with your family or loved ones but don't
            have a vehicle that fits your needs? Don't worry, we've got you
            covered! Our car rental service offers a wide range of vehicles that
            match your wants and needs, all at convenient price ranges.
          </p>
        </section>
        <section className="panel red">
          <img src={photo4} alt="image1" />
          <h2>24/7 service</h2>
          <p>
            We understand that emergencies can happen at any time, which is why
            our service is available 24/7 for your convenience
          </p>
        </section>
      </div>
      {/* <section className="footer">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Your email" />

          <textarea rows={6} placeholder="Message" />
          <button>SUBMIT</button>
        </form>
      </section> */}
    </>
  );
};
