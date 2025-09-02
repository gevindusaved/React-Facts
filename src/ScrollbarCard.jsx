import React, { useState } from "react";
import "../src/assets/css/ScrollbarCard.css";

const cardItems = [
  {
    imgsrc: "4",
    title: "Created by Facebook",
    description:
      "React was developed by Facebook in 2013 to improve the performance of their applications, especially for dynamic and complex user interfaces.",
  },
  {
    imgsrc: "2",
    title: "Component-Based Architecture",
    description:
      "React uses a component-based architecture, meaning UIs are broken into reusable, self-contained components that manage their own state and logic.",
  },
  {
    imgsrc: "7",
    title: "Virtual DOM",
    description:
      "React uses a Virtual DOM to improve performance. Instead of updating the entire real DOM, it makes minimal changes by comparing the previous and current state using a diffing algorithm.",
  },
  {
    imgsrc: "1",
    title: "JSX (JavaScript XML)",
    description:
      "React uses JSX, a syntax extension that allows developers to write HTML-like code directly within JavaScript, making code more readable and intuitive.",
  },
  {
    imgsrc: "1",
    title: "JSX (JavaScript XML)",
    description:
      "React uses JSX, a syntax extension that allows developers to write HTML-like code directly within JavaScript, making code more readable and intuitive.",
  },
];

export default function ScrollbarCard() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (index) => {
    setActiveLink(index);
    console.log(`Navigating to: ${index}`);
  };

  return (
    <div className="outer-cardcontainer">
      <div className="scroll-container">
        {cardItems.map(({ imgsrc, title, description }, index) => (
          <div
            key={index}
            className={`card ${activeLink === index ? "active-card" : ""}`}
            onClick={() => handleClick(index)}
          >
            {/* Image Section */}
            <div className="card-image-container">
              <img
                src={`/images/${imgsrc}.jpg`}
                alt={title}
                className="card-image"
              />
            </div>

            {/* Text Section */}
            <div className="card-text-container">
              <h3 className="card-heading">{title}</h3>
              <p className="card-passage">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
