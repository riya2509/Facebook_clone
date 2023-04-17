import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      {/* StoryReel */}
      <MessageSender />
      {/* MessageSender */}
      <Post
        profilePic="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
        message="Wow! This works"
        timestamp="This is a timestamp."
        username="rrriyasat"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc23Vd2IVwcCmXusDUpSfwvGXFAreQ2bWf-A&usqp=CAU"
      />
      <Post
        profilePic="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
        message="Wow! This works"
        timestamp="This is a timestamp."
        username="rrriyasat"
      />
      {/* Post */}
    </div>
  );
}

export default Feed;
