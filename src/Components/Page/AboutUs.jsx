import React from "react";
import about from "../Style/About.module.css";
import aboutImage from "../../Assets/Image/About us image.png";

const AboutUs = () => {
  return (
    <div className={about.container}>
      <div className={about.container1}>
        <img src={aboutImage} alt="About Us" width="550px" />
        <div className={about.cards}>
          <div className={about.card}>
            <h3>520+</h3>
            <p>Members</p>
          </div>
          <div className={about.card}>
            <h3>15+</h3>
            <p>Mentors</p>
          </div>
          <div className={about.card}>
            <h3>5</h3>
            <p>Events</p>
          </div>
          <div className={about.card}>
            <h3>6</h3>
            <p>Workshops</p>
          </div>
          <div className={about.card}>
            <h3>1</h3>
            <p>Conference</p>
          </div>
        </div>
      </div>
      <div className={about.container2}>
        <div className={about.containerHeader}>
          <h1>A Community for Tech-Savy Women</h1>
        </div>
        <div className={about.containertext}>
          <p>
            TechStylers serves as an empowering and inclusive community designed
            specifically for women with a passion for technology. Within this
            vibrant and supportive environment, tech-savvy individuals converge
            to share knowledge, foster connections, and embark on a collective
            journey of learning and professional growth within the dynamic
            landscape of the tech industry. At the core of our mission lies a
            commitment to providing a plethora of opportunities for women to
            thrive in their careers. Through meticulously crafted workshops,
            thought-provoking events, and a wealth of resources, TechStylers
            equips its members with the tools and insights necessary to navigate
            and excel in the ever-evolving tech sector. These initiatives are
            meticulously curated to address the unique challenges and
            opportunities that women may encounter, fostering an environment
            where skill development, mentorship, and community engagement
            converge seamlessly. Whether one is a seasoned professional seeking
            to elevate their expertise or a budding enthusiast aspiring to break
            into the tech world, TechStylers stands as a beacon of support.
          </p>
        </div>
        <div className={about.textlink}>
          <p>
            Want to be a part of the community? <a href="https://discord.gg/fzzmKDm44C" target="_blank">Click Here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
