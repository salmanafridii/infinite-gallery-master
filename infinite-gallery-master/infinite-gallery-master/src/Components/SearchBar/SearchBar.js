import React, { useState } from "react";
import "./styles.css";

export default function SearchBar(props) {
  const [val, setVal] = useState("");

  const onInputChange = (event) => {
    setVal(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.userSubmit(val);
  };

  return (
    <div data-testid="search-bar">
      <form onSubmit={onFormSubmit} className="flex-container">
        <h2 className="flex-item"> Scroll down or </h2>

        <input
          className="input-style flex-item"
          type="text"
          value={val}
          onChange={onInputChange}
          placeholder="type something here"
        />
      </form>{" "}
    </div>
  );
}
