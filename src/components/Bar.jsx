import React from "react";

function Bar({ children, className, style }) {
  return (
    <div
      style={{
        border: "1px #999",
        color: "#eee",
        borderStyle: "solid none solid none",
        width: "100%",
        ...style,
      }}
      className={`d-flex border-secondary ${className}`}
    >
      {children}
    </div>
  );
}

export default Bar;
