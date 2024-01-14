import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

import "./App.css";

const App = () => {
  const slides = [
    "https://res.cloudinary.com/dkscqmiiv/image/upload/v1705219551/samples/animals/cat.jpg",
    "https://res.cloudinary.com/dkscqmiiv/image/upload/v1705219580/samples/man-portrait.jpg",
    "https://res.cloudinary.com/dkscqmiiv/image/upload/v1705219579/samples/outdoor-woman.jpg",
    "https://res.cloudinary.com/dkscqmiiv/image/upload/v1705219560/samples/ecommerce/car-interior-design.jpg",
  ];
  const [currentColor, setCurrentColor] = useState(0);
  const [completepercent, setCompletePercent] = useState(0);

  const handleLeftClick = () => {
    setCurrentColor((prev) => (prev === 0 ? 0 : prev - 1));
    setCompletePercent(0);
  };
  const handleRightClick = () => {
    setCurrentColor((prev) =>
      prev === slides.length - 1 ? slides.length - 1 : prev + 1,
    );
    setCompletePercent(100);
  };
  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentColor((prev) => (prev === 3 ? 3 : prev + 1));
    }, 2000);
    let interval2 = setInterval(() => {
      setCompletePercent((prev) => (prev >= 100 ? 100 : prev + 20));
    }, 100);
    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  });
  return (
    <div className="App" style={{ display: "flex" }}>
      <div
        style={{
          width: "50%",
          height: "95vh",
          margin: "2rem auto",
          backgroundImage: `url(${slides[currentColor]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          tabIndex={0}
          style={{
            position: "absolute",
            top: "2rem",
            backgroundColor: "transparent",
            left: "25%",
            width: "15%",
            height: "100%",
            cursor: "pointer",
            userSelect: "none", // Disable text selection
            outline: "none", // Remove focus outline
          }}
          onClick={handleLeftClick}
        ></div>
        <div
          tabIndex={0}
          style={{
            position: "absolute",
            top: "2rem",
            right: "20%",
            backgroundColor: "transparent",
            width: "15%",
            height: "100%",
            cursor: "pointer",
            userSelect: "none", // Disable text selection
            outline: "none", // Remove focus outline
          }}
          onClick={handleRightClick}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "1rem 0rem",
            padding: "5px",
          }}
        >
          {slides.map((item, i) => (
            <div key={item} style={{ flex: 1 }}>
              <ProgressBar
                completepercent={
                  slides.indexOf(item) <= currentColor
                    ? slides.indexOf(item) < currentColor
                      ? 100
                      : completepercent
                    : 0
                }
                isActive={slides.indexOf(item) === currentColor ? true : false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
