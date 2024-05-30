/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "../Style/Resources.module.css";
import imgResources from "../../Assets/Image/Resources Image.png";
const Resources = () => {
  return (
    <div className={style.container}>
      <div className={style.txt}>
        <a href="#" className={style.resourceLink}>
          See links to resources
        </a>
      </div>
      <div className={style.gridContainer}>
        <div className={style.card}>
          <div className={style.imgResources}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.txtContainer}>
            <h1>Tech Crunch </h1>
            <p>
              Without a doubt, TechCrunch is one of the favorite tech resources
              for people all over the world. It has a huge contributor base and
              is an incredible source of information
            </p>
            <div>
              <a href="#" className={style.downloadLink}>
                Download
              </a>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imgResources}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.txtContainer}>
            <h1>Tech Crunch </h1>
            <p>
              Without a doubt, TechCrunch is one of the favorite tech resources
              for people all over the world. It has a huge contributor base and
              is an incredible source of information
            </p>
            <div>
              <a href="#" className={style.downloadLink}>
                Download
              </a>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imgResources}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.txtContainer}>
            <h1>Tech Crunch </h1>
            <p>
              Without a doubt, TechCrunch is one of the favorite tech resources
              for people all over the world. It has a huge contributor base and
              is an incredible source of information
            </p>
            <div>
              <a href="#" className={style.downloadLink}>
                Download
              </a>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imgResources}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.txtContainer}>
            <h1>Tech Crunch </h1>
            <p>
              Without a doubt, TechCrunch is one of the favorite tech resources
              for people all over the world. It has a huge contributor base and
              is an incredible source of information
            </p>
            <div>
              <a href="#" className={style.downloadLink}>
                Download
              </a>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imgResources}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.txtContainer}>
            <h1>Tech Crunch </h1>
            <p>
              Without a doubt, TechCrunch is one of the favorite tech resources
              for people all over the world. It has a huge contributor base and
              is an incredible source of information
            </p>
            <div>
              <a href="#" className={style.downloadLink}>
                Download
              </a>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imgResources}>
            <img src={imgResources} alt="Resources Img" className={style.img} />
          </div>
          <div className={style.txtContainer}>
            <h1>Tech Crunch </h1>
            <p>
              Without a doubt, TechCrunch is one of the favorite tech resources
              for people all over the world. It has a huge contributor base and
              is an incredible source of information
            </p>
            <div>
              <a href="#" className={style.downloadLink}>
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
