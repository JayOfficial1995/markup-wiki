import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./navbar.scss";

function Navbar() {
  return (
    <nav className="navigation-bar">
      <input type="checkbox" id="check" />
      <label for="check" className="check-button">
        <MenuOutlined />
      </label>
      <figure className="brand-logo">
        <picture className="logo">
          <img src="./images/logo.png" className="logo-img" />
        </picture>
        <figcaption>
          <h2 className="logo-title">MARKUP TEAM</h2>
        </figcaption>
      </figure>
      <ul className="nav-ul">
        <li className="nav-li">
          <Link to="/" href="#" className="nav-link">
            Hierachy
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/knowledge-share" href="#" className="nav-link">
            Knowledge Share
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/learning-path" className="nav-link">
            Learning Path
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/mentor-and-mentees" className="nav-link">
            Mentors and Mentees
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
