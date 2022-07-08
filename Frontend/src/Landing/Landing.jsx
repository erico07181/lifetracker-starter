import * as React from "react";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="Landing">
      <div className="hero">
        <img
          className="picture"
          src="http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg"
          alt="hero img"
        />
        <h1>Life Tracker</h1>
      </div>
      <div className="tiles">
        <div className="tile">
          <img
            src="http://codepath-lifetracker.surge.sh/static/media/icons-workout-48.4f4cdb05.svg"
            alt="Fitness"
          />
          <p>Fitness</p>
        </div>
        <div className="tile">
          <img
            src="http://codepath-lifetracker.surge.sh/static/media/icons8-porridge-100.132d2715.svg"
            alt="Food"
          />
          <p>Food</p>
        </div>
        <div className="tile">
          <img
            src="http://codepath-lifetracker.surge.sh/static/media/icons8-resting-100.81067336.svg"
            alt="Rest"
          />
          <p>Rest</p>
        </div>
        <div className="tile">
          <img
            src="http://codepath-lifetracker.surge.sh/static/media/icons8-planner-100.997ca54c.svg"
            alt="Planner"
          />
          <p>Planner</p>
        </div>
      </div>
    </div>
  );
}
