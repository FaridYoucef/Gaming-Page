import { FaSquareFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa6";

import "./styles/footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h5>COMPETITIONS</h5>
        <a href="">Tournaments</a>
        <a href="">Fortnite Tournaments</a>
        <a href="">LOL Tournaments</a>
        <a href="">COD Tournaments</a>
        <a href="">Latest News</a>
      </div>

      <div className="footer-content">
        <h5>SUPPORT</h5>
        <a href="">Ask a qustion</a>
        <a href="">FAQ</a>
        <a href="">About US</a>
      </div>

      <div className="footer-content">
        <h5>WORK WITH US</h5>
        <a href="">CEO</a>
        <a href="">Organizers</a>
        <a href="">Developers</a>
      </div>

      <div className="payment">
        <img src="/assets/images/paypal.avif" alt="" />
      </div>

      <div className="social-media">
        <a href=""><FaSquareFacebook className="icons"/></a>
        <a href=""><BsInstagram className="icons"/></a>
        <a href=""><FaSquareXTwitter className="icons"/></a>
        <a href=""><IoLogoDiscord className="icons"/></a>
        <a href=""><FaYoutube className="icons"/></a>
        <a href=""><FaTwitch className="icons"/></a>
      </div>
    </footer>
  );
}

export default Footer;
