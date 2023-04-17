import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.google.com/search?q=cute+animals&oq=cute+animals&aqs=chrome..69i57.2400j0j1&sourceid=chrome&ie=UTF-8"
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
