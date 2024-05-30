import React from "react";
import style from "../Style/Benefits.module.css";
import benefits from "../../Assets/Image/Benefits.png";
import { useState, useEffect, useRef } from "react";

const Benefits = () => {
  const [isActive, setIsActive] = useState(false)
  const containerRef = useRef(null);

  useEffect(() => {
    const current = containerRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsActive(true);
        }
      },
      { threshold: 0.8 } // Optional: Observe when 80% of the element is visible
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);
  
  return (
    <div className={style.container} ref={containerRef}>
      <div className={style.title}>
        <div className={style.hr}></div>
        <p>Benefits</p>
        <div className={style.hr}> </div>
      </div>
      <div className={style.txtImg}>
        <div className={style.txt}>
          <div>
            <ul>
              <li>Diverse and inclusive Community</li>
              <li>Networking and Community Events</li>
              <li>Access to Cutting-Edge Resources</li>
              <li>Mentorship and Support</li>
              <li>Advancement in Tech Careers</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Increased Confidence and Skills</li>
              <li>Networking Opportunities</li>
              <li>Building Lifelong Connections</li>
              <li>Professional Development Workshops</li>
            </ul>
          </div>
        </div>
        <div className={style.imgContainer}>
          <img src={benefits} alt="" className={isActive ? style.active : ''} />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
