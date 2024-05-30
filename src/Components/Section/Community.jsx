import React from "react";
import style from "../Style/Community.module.css";
import image from "../../Assets/Image/About us image.png";
import { useState, useEffect, useRef } from "react";

const Community = () => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const current = containerRef.current;
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

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsActive(true);
  //   }, 200);
  // }, [])
  return (
    <div className={style.container} ref={containerRef} id="community">
      <div className={style.imgContainer}>
        <img
          src={image}
          alt=""
          className={`${style.logo} ${isActive ? style.active : ""}`}
        />
      </div>
      <div className={style.textContainer}>
        <h1 className={isActive ? style.active : ""}>
          A Community for Tech-Savy Women{" "}
        </h1>
        <p className={isActive ? style.active : ""}>
          This community is dedicated to providing a supportive environment for
          women who are pursuing careers in tech. We offer a range of resources
          tailored to women's unique needs and challenges, including mentorship
          programs, networking events, and skill-building workshops. Our goal is
          to foster a sense of belonging and inclusion, and to help women build
          confidence, overcome imposter syndrome, and navigate career
          advancement opportunities. We also serve as a platform for advocacy,
          raising awareness about gender equality issues in the tech sector and
          advocating for systemic changes to promote diversity and inclusion.
          Most importantly, we are committed to inspiring the next generation of
          female technologists.
        </p>
        {/* <div className={style.readme}>
          <p className={`${isActive ? style.active : ""}`}>Read More...</p>
        </div> */}
      </div>
    </div>
  );
};

export default Community;
