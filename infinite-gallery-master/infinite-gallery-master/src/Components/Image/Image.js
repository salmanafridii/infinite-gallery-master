import React from "react";
import "./styles.css";

export default function Image({ url, key }) {
  return (
    <div className="single-photo" key={key}>
      <img src={url} alt="unsplash pic" />
    </div>
  );
}
