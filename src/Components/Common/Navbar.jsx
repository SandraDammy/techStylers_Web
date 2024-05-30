import React, { useState } from "react";
import style from "../Style/Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/Image/Logo.png";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav>
        <div className={style.navlogo}>
          <Link to="/">
            <img
              src={logo}
              width="70px"
              alt="TechStylers Logo"
              className={style.logo}
            />
          </Link>
        </div>
        <div className={open ? style.navMenuActive : style.navMenu}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <Link to="/" className={style.navLink}>
                Home
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/about" className={style.navLink}>
                About
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/blog" className={style.navLink}>
                Blog
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/resources" className={style.navLink}>
                Resources
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/event" className={style.navLink}>
                Events
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/gallery" className={style.navLink}>
                Gallery
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/contact" className={style.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.hamburger} onClick={() => setOpen(!open)}>
          {open ? <IoClose /> : <IoMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
