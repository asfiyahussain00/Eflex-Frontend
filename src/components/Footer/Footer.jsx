import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src="/logo.jpg" alt="E-Flex Solution" className="footer-logo" />
        {/* -------- Logo & Office Info -------- */}
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
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/BlogPage">Blog</a>
            </li>
            <li>
              <a href="/TeamPage">Team</a>
            </li>
            <li>
              <a href="/Contact">Contact us</a>
            </li>
          </ul>
        </div>

        {/* -------- Newsletter -------- */}
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
              <img src="/icons/facebook.png" alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/eflex-solution/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/linkedin1.png" alt="LinkedIn" />
            </a>
            <a
              href="https://www.instagram.com/eflexsolution.11/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/instagram.png" alt="Instagram" />
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