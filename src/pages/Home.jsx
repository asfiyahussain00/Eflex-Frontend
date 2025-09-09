import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./Home.css";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, {
    amount: 0.2,
    margin: "0px 0px -5% 0px",
  });

  useEffect(() => {
    if (!aboutRef.current) return;
    const counters = aboutRef.current.querySelectorAll(".counter");

    if (prefersReducedMotion) {
      counters.forEach((c) => {
        const target = +c.getAttribute("data-target");
        c.textContent = `${target}+`; // ✅ fixed
      });
      return;
    }

    if (aboutInView) {
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");

        const startVal = 0;
        const duration = 1200;
        const startTime = performance.now();

        const tick = (now) => {
          const t = Math.min((now - startTime) / duration, 1);

          const eased = 1 - Math.pow(1 - t, 3);
          const val = Math.floor(startVal + (target - startVal) * eased);
          counter.textContent = val.toString();
          if (t < 1) {
            requestAnimationFrame(tick);
          } else {
            counter.textContent = `${target}+`; // ✅ fixed
          }
        };
        requestAnimationFrame(tick);
      });
    } else {
      counters.forEach((c) => (c.textContent = "0"));
    }
  }, [aboutInView, prefersReducedMotion]);

  const container = {
    hidden: {},
    visible: (delay = 0) => ({
      transition: { staggerChildren: 0.08, delayChildren: delay },
    }),
  };

  const itemUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(2px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 140, damping: 18, mass: 0.4 },
    },
  };

  const heroItem = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 130, damping: 20 },
    },
  };

  return (
    <div className="home-container">
      {/* HERO */}
      <motion.section
        className="hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.7 }}
        variants={container}
        custom={0}
      >
        <motion.div
          className="hero-content will-animate"
          variants={container}
          custom={0.1}
        >
          <motion.h1 variants={heroItem}>
            Empowering Businesses with <br /> Innovative Software
          </motion.h1>
          <motion.p variants={heroItem}>
            Scalable, secure, and cutting-edge digital solutions for your
            success.
          </motion.p>
          <motion.div
            className="hero-buttons"
            variants={container}
            custom={0.2}
          >
            <motion.button
              className="btn-primary"
              variants={heroItem}
              whileHover={{ scale: 1.05 }}
            >
              Get Started
            </motion.button>
            <motion.button
              className="btn-secondary"
              variants={heroItem}
              whileHover={{ scale: 1.05 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        ref={aboutRef}
        className="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        variants={container}
        custom={0}
      >
        <div className="about-grid">
          <motion.div
            className="about-image-wrapper will-animate"
            variants={itemUp}
          >
            <img src="./team.jpg" alt="About us" className="about-img" />
          </motion.div>

          <motion.div
            className="about-content will-animate"
            variants={container}
            custom={0.1}
          >
            <motion.h2 variants={itemUp}>About Us</motion.h2>
            <motion.p variants={itemUp}>
              We are a passionate team dedicated to delivering innovative and
              scalable software solutions for businesses worldwide. Our mission
              is to empower organizations with technology that drives success.
            </motion.p>

            <motion.div
              className="about-stats"
              variants={container}
              custom={0.2}
            >
              <motion.div className="stat-card" variants={itemUp}>
                <h3 className="counter" data-target="10">
                  0
                </h3>
                <p>Years Experience</p>
              </motion.div>
              <motion.div className="stat-card" variants={itemUp}>
                <h3 className="counter" data-target="500">
                  0
                </h3>
                <p>Happy Clients</p>
              </motion.div>
              <motion.div className="stat-card" variants={itemUp}>
                <h3 className="counter" data-target="50">
                  0
                </h3>
                <p>Countries Served</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* About Cards */}
        <motion.div className="about-cards" variants={container} custom={0.15}>
          {[
            {
              img: "/mission1.jpg",
              title: "Our Mission",
              text: "To deliver scalable, innovative solutions that help businesses grow and thrive in the digital world.",
            },
            {
              img: "/vision1.jpg",
              title: "Our Vision",
              text: "To empower organizations globally with cutting-edge technology that drives impact.",
            },
            {
              img: "/values1.jpg",
              title: "Our Values",
              text: "Innovation, integrity, and teamwork are at the heart of everything we do.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="about-card will-animate"
              variants={itemUp}
            >
              <img src={card.img} alt={card.title} />
              <div className="about-card-content">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section
        className="why-choose"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={container}
        custom={0}
      >
        <motion.h2 variants={itemUp}>Why Choose Us</motion.h2>
        <div className="card-grid">
          {[
            {
              title: "Fast Delivery",
              text: "Agile processes ensure your projects are delivered on time without sacrificing quality.",
            },
            {
              title: "Secure Solutions",
              text: "We follow enterprise-grade security standards to keep your data safe and protected.",
            },
            {
              title: "Innovative Tech",
              text: "Our team leverages the latest technologies to build scalable and future-ready solutions.",
            },
            {
              title: "Dedicated Support",
              text: "Enjoy 24/7 customer support to keep your business running smoothly at all times.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="card will-animate"
              variants={itemUp}
              whileHover={{ y: -6 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        id="services"
        className="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        variants={container}
        custom={0}
      >
        <motion.h1 variants={itemUp}>Services</motion.h1>
        <div className="services-container">
          <motion.div
            className="services-list"
            variants={container}
            custom={0.1}
          >
            {[
              {
                title: "Web Development",
                description: "Modern, scalable, and responsive websites.",
              },
              {
                title: "Graphic Designing",
                description: "Creative visuals that tell your brand’s story.",
              },
              {
                title: "SEO Services",
                description: "Boost your search rankings and visibility.",
              },
              {
                title: "Digital Marketing",
                description: "Strategies that grow your online presence.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="service-item will-animate"
                variants={itemUp}
                whileHover={{ x: 4 }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="services-preview will-animate"
            variants={itemUp}
          >
            <img
              src="/services-img.jpg"
              alt="Services Overview"
              className="services-image"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* CUSTOMER REVIEWS */}
      <motion.section
        className="reviews"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={container}
        custom={0}
      >
        <motion.h2 variants={itemUp}>Customer Reviews</motion.h2>
        <div className="card-grid">
          {[1, 2, 3].map((review, idx) => (
            <motion.div
              key={idx}
              className="card will-animate"
              variants={itemUp}
              whileHover={{ y: -6 }}
            >
              <div className="review-header">
                <img
                  src={`https://i.pravatar.cc/100?img=${idx + 5}`} // ✅ fixed
                  alt="Customer"
                  className="avatar"
                />
                <div>
                  <h3>Customer {idx + 1}</h3>
                  <p>CEO, Company</p>
                </div>
              </div>
              <p>
                “Amazing service and excellent support. Highly recommended!”
              </p>
              <div className="stars">★★★★★</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
