import React from "react";
import style from "../Style/Footer.module.css";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import logo from "../../Assets/Image/Logo.png";
import twitter from "../../Assets/Image/Twitter.png";
import facebook from "../../Assets/Image/Facebook.png";
import linkedin from "../../Assets/Image/Linkedin.png";

const Footer = () => {
  return (
    <footer>
      <div className={style.container}>
        <div className={style.navigation}>
          <div className={style.navChild}>
            <h6>Services</h6>
            <p>
              <Link to="#techWorkshop" className={style.link}>
                Tech Workshop
              </Link>
            </p>
            <p>
              <Link to="/resources" className={style.link}>
                Learning Resources
              </Link>
            </p>
            <p>
              <Link to="#community" className={style.link}>
                Community Events
              </Link>
            </p>
          </div>
          <div className={style.navChild}>
            <h6>Information</h6>
            <p>
              <Link to="#articles" className={style.link}>
                Tech Trends
              </Link>
            </p>
            <p>
              <Link to="/blog" className={style.link}>
                Career Advice
              </Link>
            </p>
            <p>
              <Link to="#successStories" className={style.link}>
                Success Stories
              </Link>
            </p>
          </div>

          <div className={style.navChild}>
            <h6>Company</h6>
            <p>
              <Link to="/about" className={style.link}>
                About Us
              </Link>
            </p>
            <p>
              <Link to="#services" className={style.link}>
                Services
              </Link>
            </p>
            <p>
              <Link to="/event" className={style.link}>
                Events
              </Link>
            </p>
            <p>
              <Link to="/resources" className={style.link}>
                Resources
              </Link>
            </p>
            <p>
              <Link to="/contact" className={style.link}>
                Contact
              </Link>
            </p>
          </div>
          <div className={style.navChild}>
            <div className={style.searchContainer}>
              <h6>Subscribe</h6>
              <div className={style.searchItems}>
                <input
                  type="search"
                  name="subscribe"
                  id="subscribe"
                  placeholder="Email address"
                  className={style.searchBar}
                />
                <button type="submit" className={style.formButton}>
                  <IoArrowForward className={style.buttonIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.copyRight}>
          <p>Techstylers &copy; 2024 All Rights Reserved</p>
          <div className={style.divider}></div>
          <div className={style.bottomRight}>
            <img src={logo} alt="Logo" width="75px" />
            <div className={style.bottomLink}>
              <p>
                <Link to="/terms" className={style.link}>
                  Terms
                </Link>
              </p>
              <p>
                <Link to="/privacy" className={style.link}>
                  Privacy
                </Link>
              </p>
            </div>
            <div className={style.socials}>
              <a
                href="https://www.linkedin.com/company/techstylers/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img src={linkedin} alt="Linkedin" width="40px" />
              </a>
              <a
                href="https://www.linkedin.com/techstylers/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img src={facebook} alt="Facebook" width="40px" />
              </a>
              <a
                href="https://x.com/Tech_Stylers"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img src={twitter} alt="Twitter" width="40px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
