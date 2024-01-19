import React from "react";
import "./App.css";
import Images from "./Components/Images/Images";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h4> Code Challenge HiPeople </h4>
        <h1> Unsplash Pictures </h1>{" "}
      </div>{" "}
      <Images className="images" />
    </div>
  );
}

export default App;
