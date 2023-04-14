import { InsertEmoticon, PhotoLibrary, Videocam } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./MessageSender.css";

function MessageSender() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="messageSender">
      {/* Top */}
      <div className="messageSender_top">
        <Avatar src="https://static.vecteezy.com/system/resources/previews/006/920/871/original/girls-with-bob-hairstyle-abstract-female-shap-and-silhouette-abstract-women-portrait-in-pastel-colors-contemporary-art-posters-fashion-girl-for-social-media-vector.jpg" />
        <form>
          <input
            className="messageSender_input"
            type="text"
            placeholder="What's on your mind, Riya Gupta?"
          />
          <input placeholder={`Image URl (Optional)`} />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      {/* Bottom */}

      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender_option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender_option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
