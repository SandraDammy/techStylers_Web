import React from "react";
import style from "../Style/Services.module.css";
import Title from "../Common/Title";
import Services1 from "../../Assets/Image/Our services 1.png";
import Services2 from "../../Assets/Image/Our services 2.png";
import Services3 from "../../Assets/Image/Our services 3.png";

const Services = () => {
  return (
    <div className={style.container} id="services">
      <Title className={"titlePry"} title={"Our Services"} />
      <div className={style.imgContainer}>
        <div className={style.card}>
          <div className={style.imgServices}>
            <img src={Services1} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.txtService} id="techWorkshop">
            <h4>Tech Workshop</h4>
            <p>
              Our workshops provide interactive, hands-on learning experiences
              to empower women with the skills and knowledge needed to succeed
              in the tech industry.
            </p>
            <a
              href="https://www.youtube.com/@techstylers1285"
              target="_blank"
              className={style.youtube}
            >
              Read More...
            </a>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imgServices}>
            <img src={Services2} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.txtService}>
            <h4>Learning Resources</h4>
            <p>
              Our learning resources provide curated, high-quality content that
              is accessible to all women, regardless of their level of
              experience or background.
            </p>
            <a
              href="https://www.youtube.com/@techstylers1285"
              target="_blank"
              className={style.youtube}
            >
              Read More...
            </a>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imgServices}>
            <img src={Services3} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.txtService}>
            <h4>Community Events</h4>
            <p>
              Our community events provide a platform for women to connect,
              share ideas, and learn from each other in a supportive and
              inclusive environment.
            </p>
            <a
              href="https://www.youtube.com/@techstylers1285"
              target="_blank"
              className={style.youtube}
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
