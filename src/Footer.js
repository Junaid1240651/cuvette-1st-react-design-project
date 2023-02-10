import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <div class="footerContainer">
        <div class="ulListLeft">
          <ul>Prompt Generator</ul>
          <ul>Dweep Daily</ul>
          <ul>All Contributors</ul>
          <ul>Your data on Dweep.io</ul>
          <ul>Contribute to Dweep</ul>
        </div>
        <div class="ulListRight">
          <ul> Dweep.io</ul>
          <ul>Made with love in India</ul>
          <div class="socialLogo">
            <img src="images/InstagramLogo.png" alt="" />
            <img src="images/LinkedinLogo.png" alt="" />
          </div>
          <ul> </ul>
          <ul></ul>
          <ul>hello@dweep.io</ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
