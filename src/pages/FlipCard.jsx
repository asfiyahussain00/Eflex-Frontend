import React from "react";
import "./FlipCard.css";

export default function FlipCard({ image, name, role, bio, socials }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={name} className="team-img" />
          <h3>{name}</h3>
          <p>{role}</p>
        </div>

        
        <div className="flip-card-back">
          <h3>{name}</h3>
          <p>{bio}</p>
          <div className="socials">
            {socials?.map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noreferrer">
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
