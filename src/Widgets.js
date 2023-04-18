import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://kiitportal.kiituniversity.net/irj/portal/"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        allowTransparency="true"
        allow="encrypted-media"
        title="Widget"
      ></iframe>
    </div>
  );
}

export default Widgets;
