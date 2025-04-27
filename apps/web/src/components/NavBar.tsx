import React from "react";
import { Link } from "react-router";

import { navLinks } from "../constants/index.ts";

export const NavBar = () => {
  return (
    <header className="navbar">
      <div className="inner">
        <a href="#hero" className="logo">
          CONDEV
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <Link to={link}>
                  <span>{name}</span>

                  <span className="underline"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact us</span>
          </div>
        </a>
      </div>
    </header>
  );
};
