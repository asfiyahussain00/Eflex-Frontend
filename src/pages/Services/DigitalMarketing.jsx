



import { useState } from "react";
import { motion } from "framer-motion"; 

export default function DigitalMarketing() {
  const [active, setActive] = useState(null);

  
  const services = [
    {
      title: "DIGITAL MARKETING Company",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      desc: "A digital marketing company helps businesses promote their products and services using digital channels such as search engines, social media, email, and mobile applications."
    },
    {
      title: "Search Engine Marketing",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
      desc: "SEM is a form of digital marketing that involves promoting a website by increasing its visibility in search engine results pages (SERPs) through paid advertising and SEO techniques."
    },
    {
      title: "Social Ads",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135712.png",
      desc: "Social ads refer to paid advertisements that are placed on social media platforms to promote a product, service, or brand."
    },
    {
      title: "Social Media Marketing",
      img: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
      desc: "SMM involves using social media platforms, such as Facebook, Instagram, Twitter, and LinkedIn, to promote a product, service, or brand."
    },
    {
      title: "Advertising Audit",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135807.png",
      desc: "At Eflex-Solution, we offer advertising audit services to help businesses optimize their advertising strategies and campaigns."
    }
  ];

  // --- Pricing Plans Data ---
  const plans = [
    {
      name: "Weekly Package",
      price: "5K",
      features: [
        "Facebook Boosting",
        "Targeted audience",
        "Reaches and Estimates high",
        "Complete Page Seo",
        "7 days working package",
        "Good area targeted",
        "Fully 7 days active manage add",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
    {
      name: "15 Days Work",
      price: "15K",
      badge: "Best value",
      features: [
        "Facebook Boosting",
        "Targeted audience",
        "Reaches and Estimates high",
        "Complete Page Seo High Rank",
        "15 days working package",
        "Good area targeted",
        "Fully 15 days active manage add",
        "80% of orders chances for your service",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
    {
      name: "Monthly Package",
      price: "30K",
      features: [
        "Facebook Boosting + Whatsapp marketing",
        "Targeted audience all over Pakistan",
        "Reaches and Estimates high",
        "Complete Page Seo High Rank",
        "30 days working package",
        "Good area targeted all over Pakistan",
        "Fully 30 days active manage add",
        "100% of orders chances for your service",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
  ];

  return (
    <div className="digital-marketing">
     
      <div className="dm-head">
        <h2>Digital Marketing</h2>
      </div>

     
      <div className="services-grid">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="service-card"
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }} // left-right alternate
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={s.img} alt={s.title} />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>

    
      <div className="pricing-head">
        <h2>Digital Marketing Packages</h2>
        <p className="sub">Pricing Plans</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={[
              "price-card",
              plan.badge ? "ribboned" : "",
              plan.badge === "Best value" ? "best" : "",
              plan.elite ? "elite" : "",
              active === i ? "active" : "",
            ].join(" ")}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 100 }} // niche se aayega
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.3 }}
            viewport={{ once: true }}
          >
            {plan.badge && <span className="ribbon">{plan.badge}</span>}

            <div className="price-top">
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
              </div>
            </div>

            <ul className="features">
              {plan.features.map((f) => (
                <li key={f}>
                  <span className="check">✔</span> {f}
                </li>
              ))}
            </ul>

            <button className="cta">Get Started</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

