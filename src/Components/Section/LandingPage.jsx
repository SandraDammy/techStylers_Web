import React from "react";
import style from "../Style/landingPage.module.css";
import Button from "../Common/Button";
import hero1 from "../../Assets/Image/Hero Image 1.png";
import hero2 from "../../Assets/Image/Hero Image 2.png";
import hero3 from "../../Assets/Image/Hero Image 3.png";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const btnEventHandler = () => {
    console.log("Event clicked!");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [hero1, hero2, hero3];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images]);
  return (
    <section className={style.container}>
      <div className={style.textContainer}>
        {/* <div className={style.textTitle}> */}
        <h1 className={style.title}>
          Empowering <span>Women</span>
          <br />
          In <span>Technology</span>
        </h1>
        <p className={style.desc}>Breaking Barriers, Building Futures.</p>
        {/* </div> */}
        <div className={style.btnJoin}>
          <Button
            className={"btnPry"}
            title={"Join Now"}
            btnEventHandler={btnEventHandler}
          />
        </div>
        <div className={style.bigTxt}>
          <div>
            <p className={style.big}>520+</p>
            <p className={style.txt}>Members</p>
          </div>
          <div>
            <p className={style.big}>15+</p>
            <p className={style.txt}>Mentors</p>
          </div>
          <div>
            <p className={style.big}>5</p>
            <p className={style.txt}>Events</p>
          </div>
          <div>
            <p className={style.big}>6</p>
            <p className={style.txt}>Workshops</p>
          </div>
          <div>
            <p className={style.big}>1</p>
            <p className={style.txt}>Conference</p>
          </div>
        </div>
      </div>
      <div className={style.imgContainer}>
        <div className={style.heroImg}>
          <img src={images[currentImage]} alt="" className={style.logo} />
          <img src={images[(currentImage + 1) % images.length]} alt="" className={style.logo} />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
