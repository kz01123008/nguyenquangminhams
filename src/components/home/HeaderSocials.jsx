import React from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaDev,
  FaInstagram,
} from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.facebook.com/profile.php?id=100054176099644"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.instagram.com/f.erbbb/"
        className="home__social-link"
        target="__blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.google.com/intl/vi/gmail/about"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        nguyenminh1604hn@gmail.com
      </a>
    </div>
  );
};

export default HeaderSocials;
