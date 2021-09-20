import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/Patty9049">
        <p>
          To see more visit my <FontAwesomeIcon icon={faGithub} />{" "}
        </p>
      </a>
    </div>
  );
};

export default Footer;