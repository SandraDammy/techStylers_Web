import React from "react";
import blog from "../Style/About.module.css";
import blog1 from "../Style/Blog.module.css";
import aboutImage from "../../Assets/Image/About us image.png";

const Blog = () => {
  return (
    <div className={blog.container}>
      <div className={blog1.container1}>
        <div className={blog1.containerimg}>
          <img src={aboutImage} alt="About Us" width="700px" />
          <div className={blog1.imageContent}>
            <h6>Featured</h6>
            <h2>
              Watch Axiom Space’s first all-European mission blast off the
              launchpad
            </h2>
            <p>
              TechStylers serves as an empowering and inclusive community
              designed specifically for women with a passion for technology.
              Within this vibrant and supportive environment,
            </p>
          </div>
        </div>
        <div className={blog1.blogcontent}>
          <h3>Recent Blog Posts</h3>
          <div className={blog1.blogCards}>
            <div className={blog1.blogCard}>
              <div className={blog1.cardTime}>
                <p>Tech Trend</p>
                <div className={blog1.circle}></div>
                <span> 5 mins read</span>
              </div>
              <div className={blog1.cardText}>
                <h4>
                  Watch Axiom Space’s first all-European mission blast off the
                  launchpad
                </h4>
              </div>
              <div className={blog1.blogTime}>
                <p>4 hours ago</p>
              </div>
            </div>
            <div className={blog1.blogCard}>
              <div className={blog1.cardTime}>
                <p>Tech Trend</p>
                <div className={blog1.circle}></div>
                <span> 5 mins read</span>
              </div>
              <div className={blog1.cardText}>
                <h4>
                  Watch Axiom Space’s first all-European mission blast off the
                  launchpad
                </h4>
              </div>
              <div className={blog1.blogTime}>
                <p>4 hours ago</p>
              </div>
            </div>
            <div className={blog1.blogCard}>
              <div className={blog1.cardTime}>
                <p>Tech Trend</p>
                <div className={blog1.circle}></div>
                <span> 5 mins read</span>
              </div>
              <div className={blog1.cardText}>
                <h4>
                  Watch Axiom Space’s first all-European mission blast off the
                  launchpad
                </h4>
              </div>
              <div className={blog1.blogTime}>
                <p>4 hours ago</p>
              </div>
            </div>
            <div className={blog1.blogCard}>
              <div className={blog1.cardTime}>
                <p>Tech Trend</p>
                <div className={blog1.circle}></div>
                <span> 5 mins read</span>
              </div>
              <div className={blog1.cardText}>
                <h4>
                  Watch Axiom Space’s first all-European mission blast off the
                  launchpad
                </h4>
              </div>
              <div className={blog1.blogTime}>
                <p>4 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={blog1.container2}>
        <div className={blog1.articleCard}>
          <div className={blog1.cardTime}>
            <p>Tech Trend</p>
            <div className={blog1.circle}></div>
            <span> 5 mins read</span>
          </div>
          <div className={blog1.cardText}>
            <h4>
              Watch Axiom Space’s first all-European mission blast off the
              launchpad
            </h4>
          </div>
          <div className={blog1.blogTime1}>
            <p>4 hours ago</p>
          </div>
          <div className={blog1.articleBody}>
            <p>
              TechStylers serves as an empowering and inclusive community
              designed specifically for women with a passion for technology.
              Within this vibrant and supportive environment, tech-savvy
              individuals converge to share knowledge, foster connections, and
              embark on a collective journey of learning and professional growth
              within the dynamic landscape of the tech industry. At the core of
              our mission lies a commitment to providing a plethora of
              opportunities for women to thrive in their careers. Through
              meticulously crafted workshops, thought-provoking events, and a
              wealth of resources, TechStylers equips its members with the tools
              and insights necessary to navigate and excel in the ever-evolving
              tech sector. These initiatives are meticulously curated to address
              the unique challenges and opportunities that women may encounter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
