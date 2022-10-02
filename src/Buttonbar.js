import React from "react";
import "./Buttonbar.css";

export default function Buttonbar() {
  return (
    <section className="Buttonbar">
      <div className="button-bar">
        <div className="row">
          <div className="col-sm-2">
            <div className="weather-tile">
              <div className="days">Monday</div>
              <div className="date-bar">04/06</div>
              <div className="icon-bar">
                <i class="fa-regular fa-sun"></i>
              </div>
              <div className="temp-bar">27°C</div>
            </div>
          </div>

          <div className="col-sm-2">
            <div className="weather-tile">
              <div className="days">Tuesday</div>
              <div className="date-bar">05/06</div>
              <div className="icon-bar">
                <i class="fa-solid fa-cloud"></i>
              </div>
              <div className="temp-bar">23°C</div>
            </div>
          </div>

          <div class="col-sm-2">
            <div className="weather-tile">
              <div className="days">Wednesday</div>
              <div className="date-bar">06/06</div>
              <div className="icon-bar">
                <i className="fa-solid fa-cloud-rain"></i>
              </div>
              <div className="temp-bar">26°C</div>
            </div>
          </div>

          <div className="col-sm-2">
            <div className="weather-tile">
              <div className="days">Thursday</div>
              <div className="date-bar">07/06</div>
              <div className="icon-bar">
                <i class="fa-regular fa-sun"></i>
              </div>
              <div className="temp-bar">21°C</div>
            </div>
          </div>

          <div className="col-sm-2">
            <div className="weather-tile">
              <div className="days">Friday</div>
              <div className="date-bar">08/06</div>
              <div className="icon-bar">
                <i className="fa-solid fa-cloud-rain"></i>
              </div>
              <div class="temp-bar">29°C</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
