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
    </div>
  );
}
