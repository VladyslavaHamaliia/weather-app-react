import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState("");

  function showWeather(responce) {
    setLoaded({
      city: responce.data.name,
      temperature: responce.data.main.temp,
      description: responce.data.weather[0].description,
      humidity: responce.data.main.humidity,
      wind: responce.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${responce.data.weather[0].icon}@2x.png`,
    });
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b48f214fdacd498623137e3a61d506e5&units=metric`;
    axios.get(url).then(showWeather);
  }
  let form = (
    <div className="Navbar">
      <section>
        <nav className="navbar" id="search-bar">
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter your city"
              aria-label="Search"
              id="search-form"
              onChange={updateCity}
            />
            <button className="btn btn-outline-warning" type="submit">
              Search
            </button>
            <button
              className="btn btn-outline-success"
              id="geolocation-button"
              type="submit"
            >
              Current
            </button>
          </form>
        </nav>
      </section>
    </div>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <ul>
          <li> {loaded.city}</li>
          <li> Temperature: {Math.round(loaded.temperature)}°C</li>
          <li>Description: {loaded.description}</li>
          <li>Humidity:{loaded.humidity} % </li>
          <li> Wind : {Math.round(loaded.wind)} m/s</li>
          <li>
            {" "}
            <img src={loaded.icon} alt="Weather-icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        {form}
        <ul>
          <li> </li>
          <li> Temperature:</li>
          <li>Description: </li>
          <li>Humidity: </li>
          <li> Wind :</li>
          <li></li>
        </ul>
      </div>
    );
  }
}
