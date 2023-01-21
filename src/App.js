import React from "react";
import "./App.css";
import { AiOutlineSearch } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
// import axios from "axios";

function App() {
  return (
    <div className="container">
      <div className="form">
        <h3>Confira o clima de uma cidade:</h3>
        <div className="form-input-container">
          <input
            type="text"
            placeholder="digite o nome da cidade"
            id="city-input"
          />
          <button>
            <AiOutlineSearch />
          </button>
        </div>
      </div>
      <div className="weather-data">
        <h2>
          <IoLocationSharp />
          <span id="city"> {""} </span>
        </h2>
      </div>
    </div>
  );
}

export default App;
