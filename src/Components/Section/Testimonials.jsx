import React from "react";
import style from "../Style/testimonial.module.css";
import Title from "../Common/Title";
import Victoria from "../../Assets/Image/Victoria.png";
import Annabel from "../../Assets/Image/Annabel.png";
import Omolola from "../../Assets/Image/Omolola.png";
import Feyikemi from "../../Assets/Image/Feyikemi.png";
import { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const [isActive, setIsActive] = useState(false);
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
  }
  , []);
  return (
    <div className={style.testimonialsContainer} ref={containerRef} id="successStories">
      <Title className={"titlePry"} title={"Members Testimonials"} />
      <p className={style.testTxt}>
        Hear what our members have to say about us
      </p>
      <div className={style.testimonialContent}>
        <div className={`${style.testimonialMember} ${isActive ? style.active : ''}`}>
          <p>
            TechStylers has provided me with the support and resources I needed
            to advance in my tech career. The community is welcoming and
            inclusive, and I’ve learned so much from the workshops and events.
          </p>
          <div className={style.testimonialAuthor}>
            <img src={Victoria} alt="" className={style.authorImage} />
            <p className={style.name}>Victoria Erogunaiye</p>
          </div>
        </div>
        <div className={`${style.testimonialMember1} ${isActive ? style.active : ''}`}>
          <p>
            Since joining TechStylers, I've gained so much confidence in my tech
            skills and abilities. The community is incredibly supportive, and
            the events have been a fantastic way to network with other
            like-minded women.
          </p>
          <div className={style.testimonialAuthor}>
            <img src={Omolola} alt="" className={style.authorImage} />
            <p className={style.name}>Omolola Alfred</p>
          </div>
        </div>
        <div className={`${style.testimonialMember2} ${isActive ? style.active : ''}`}>
          <p>
            TechStylers has been a valuable resource for me as a woman in tech.
            The community is vibrant and diverse, and the workshops have helped
            me stay up-to-date on the latest tech trends and developments.
          </p>
          <div className={style.testimonialAuthor}>
            <img src={Annabel} alt="" className={style.authorImage} />
            <p className={style.name}>Annabel Okuomose</p>
          </div>
        </div>
        <div className={`${style.testimonialMember3} ${isActive ? style.active : ''}`}>
          <p>
            Thanks to TechStylers, I've been able to connect with other women in
            tech and build a strong support network. The workshops and events
            have been insightful and informative, and I'm grateful for the
            opportunity to learn and grow.
          </p>
          <div className={style.testimonialAuthor}>
            <img src={Feyikemi} alt="" className={style.authorImage} />
            <p className={style.name}>Feyikemi Akinwande</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
