import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @mbaburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.youtube.com/@TheFieryHuman/">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/sagar.h__">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/sagarpatel42">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
