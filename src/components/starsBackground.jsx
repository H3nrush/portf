import React, { useEffect, useState } from "react";
import "./startBackground.css";

export default function StarsBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Create 50 stars with random positions, sizes, and animation durations
    const starArray = Array.from({ length: 50 }, () => ({
      left: Math.random() * window.innerWidth,
      top: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1, // size 1-4px
      duration: Math.random() * 5 + 3 // duration 3-8s
    }));
    setStars(starArray);
  }, []);

  return (
    <div className="stars-background">
      {stars.map((star, idx) => (
        <div
          key={idx}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDuration: `${star.duration}s`
          }}
        ></div>
      ))}
    </div>
  );
}