import React from "react";
import style from "../Style/Resources.module.css";
import imgResources from "../../Assets/Image/Resources Image.png";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Gallery = () => {
  return (
    <div className={style.container}>
      <div className={style.eventContainer}>
        <div className={style.txtLink}>
          <div className={style.txtIcon}>
            <p>TechStyler Event 2021</p>
            <MdOutlineKeyboardArrowUp className={style.icon} />
          </div>
          <div>
            <a href="/" className={style.seeLink}>
              See All
            </a>
          </div>
        </div>
        <div className={style.cardGrid}>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
        </div>
      </div>
      <div className={style.eventContainer}>
        <div className={style.txtLink}>
          <div className={style.txtIcon}>
            <p>TechStyler Event 2022</p>
            <MdOutlineKeyboardArrowUp className={style.icon} />
          </div>
          <div>
            <a href="#" className={style.seeLink}>
              See All
            </a>
          </div>
        </div>
        <div className={style.cardGrid}>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
        </div>
      </div>
      <div className={style.eventContainer}>
        <div className={style.txtLink}>
          <div className={style.txtIcon}>
            <p>TechStyler Event 2023</p>
            <MdOutlineKeyboardArrowUp className={style.icon} />
          </div>
          <div>
            <a href="#" className={style.seeLink}>
              See All
            </a>
          </div>
        </div>
        <div className={style.cardGrid}>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.card}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
