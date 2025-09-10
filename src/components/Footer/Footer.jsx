import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import logo from "../../assets/logo.png"; // ✅ apna logo path yahan lagao

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={logo} alt="E-Flex Solution" className="footer-logo" />

        {/* -------- Office Info -------- */}
        <div className="footer-section">
          <h3 className="footer-title">Office</h3>
          <p>Gulshan-e-Iqbal Block 10-A Pakistan, PK</p>
          <a href="mailto:eflexsolution.11@gmail.com">
            eflexsolution.11@gmail.com
          </a>
          <br />
          <a href="tel:+923191298121">+92 319 1298121</a>
        </div>

        {/* -------- Links -------- */}
        <div className="footer-section">
          <h3 className="footer-title">Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/teampage">Team</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* -------- Newsletter & Socials -------- */}
        <div className="footer-section">
          <h3 className="footer-title">NewsLetter</h3>
          <div className="newsletter">
            <input type="email" placeholder="Enter Your Email" />
            <button>→</button>
          </div>

          <div className="footer-socials">
            <a
              href="https://www.facebook.com/profile.php?id=100092502737111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/eflex-solution/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/eflexsolution.11/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-bottom">
        Eflex-Solution © {new Date().getFullYear()} - All Rights Reserved
      </p>
    </footer>
  );
}
