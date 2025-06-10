import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container flex justify-center gap-50">
        {/* <div className="flex flex-col justify-center items-center md:items-start items-center">
          <a href="/">Visit My Blog</a>
        </div> */}
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" href={img.url} key={img.url}>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} Priyank Shah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
