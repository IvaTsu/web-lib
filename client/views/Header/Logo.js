import React from "react";
import style from "./../../assets/styles/styles.css";

const Logo = () => (
  <a href="#">
    <ul>
      <li>
        <img src={require("./../../assets/images/logo.png")} alt={"logo"} />
      </li>
      <li>Web Library</li>
    </ul>
  </a>
);

export default Logo;
