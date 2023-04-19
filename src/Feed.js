import React, { useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./Firebase";
import { useState } from "react";

function Feed() {
  const [posts, setPosts] = useState([]);

  // Works only ones when the feed component loads when there is an empty []
  //Realtime connection to the database
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      {/* StoryReel */}
      <MessageSender />
      {/* MessageSender */}

      {/* Instead of hardcoded post we will apply through the database */}
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.profilePic}
          image={post.image}
          message={post.message}
          timestamp={post.timestamp}
          username={post.username}
        />
      ))}

      {/* Post */}
    </div>
  );
}

export default Feed;
