import React from "react";
const ProgressBar = ({ completepercent, isActive }) => {
  const containerStyles = {
    height: 10,
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completepercent}%`,
    backgroundColor: "#A9A9A9",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 2,
    color: "white",
    fontWeight: "bold",
  };
  return (
    <div style={containerStyles}>
      <div
        style={{
          ...fillerStyles,
          transition: isActive
            ? completepercent === 0
              ? "none"
              : "width 2s linear"
            : "none",
        }}
      >
        <span style={labelStyles}>{}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
