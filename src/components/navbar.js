import React from "react";
import styles from "./nav.module.css";
import logo from "../assets/images/logo.jpeg";
import Consultancy from "./../pages/consultancy";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className={styles.main_nav}>
        <img src={logo} />

        <div className={styles.menu}>
          <Link to="/" className={styles.li} >Home</Link>

          <Link to="/consultancy"  className={styles.li}>Consultancy</Link>

          <Link className={styles.li}>Products</Link>

          <Link className={styles.li}>Careers</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
