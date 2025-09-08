
import FlipCard from "./FlipCard";
import "./FlipCard.css";

export default function TeamPage() {
  const teamMembers = [
    {
      image: "/profile.jpg",
      name: "Jane Smith",
      role: "CTO",
      bio: "Expert in cloud computing and AI-driven technologies.",
      socials: [
        { name: "GitHub", icon: "/icons/github.png", link: "https://github.com" },
        { name: "LinkedIn", icon: "/icons/linkedin.png", link: "https://linkedin.com" },
      ],
    },
    {
      image: "/profile.jpg",
      name: "Jane Smith",
      role: "CTO",
      bio: "Expert in cloud computing and AI-driven technologies.",
      socials: [
        { name: "GitHub", icon: "/icons/github.png", link: "https://github.com" },
        { name: "LinkedIn", icon: "/icons/linkedin.png", link: "https://linkedin.com" },
      ],
    },
    {
      image: "/profile.jpg",
      name: "Jane Smith",
      role: "CTO",
      bio: "Expert in cloud computing and AI-driven technologies.",
      socials: [
        { name: "GitHub", icon: "/icons/github.png", link: "https://github.com" },
        { name: "LinkedIn", icon: "/icons/linkedin.png", link: "https://linkedin.com" },
      ],
    },
    {
      image: "/profile.jpg",
      name: "Jane Smith",
      role: "CTO",
      bio: "Expert in cloud computing and AI-driven technologies.",
      socials: [
        { name: "GitHub", icon: "/icons/github.png", link: "https://github.com" },
        { name: "LinkedIn", icon: "/icons/linkedin.png", link: "https://linkedin.com" },
      ],
    },
    {
      image: "/profile.jpg",
      name: "Jane Smith",
      role: "CTO",
      bio: "Expert in cloud computing and AI-driven technologies.",
      socials: [
        { name: "GitHub", icon: "/icons/github.png", link: "https://github.com" },
        { name: "LinkedIn", icon: "/icons/linkedin.png", link: "https://linkedin.com" },
      ],
    },
    {
      image: "/profile.jpg",
      name: "Jane Smith",
      role: "CTO",
      bio: "Expert in cloud computing and AI-driven technologies.",
      socials: [
        { name: "GitHub", icon: "/icons/github.png", link: "https://github.com" },
        { name: "LinkedIn", icon: "/icons/linkedin.png", link: "https://linkedin.com" },
      ],
    },
  ];

  return (
    <section className="team-page">
      <h2>Meet Our Team</h2>
      <p>Passionate innovators building the future together.</p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <FlipCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
}
