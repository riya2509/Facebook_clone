import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      {/* Story */}
      <Story
        image="https://i.easil.com/wp-content/uploads/20190626185211/4._see_event_-_colour_block_overlay_instagram_stories-576x1024.jpg"
        profileSrc="https://static.vecteezy.com/system/resources/previews/006/920/871/original/girls-with-bob-hairstyle-abstract-female-shap-and-silhouette-abstract-women-portrait-in-pastel-colors-contemporary-art-posters-fashion-girl-for-social-media-vector.jpg"
        title="Shreya"
      />
      <Story
        image="https://img.freepik.com/free-psd/real-estate-house-property-instagram-facebook-story-template_120329-1890.jpg"
        profileSrc="https://www.sarojhospital.com/images/testimonials/dummy-profile.png"
        title="Samir kumar"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2iea1OM6JWLHz2Io4rbe4nS2cQS0VxRsTZA&usqp=CAU"
        profileSrc="https://media.istockphoto.com/id/1154642632/photo/close-up-portrait-of-brunette-woman.jpg?b=1&s=612x612&w=0&k=20&c=7hgSq1L2mpIbpuuw00KELApMpmZfBkZ-RBxn3Qps5zQ="
        title="Navya Sonal"
      />
      <Story
        image="https://marketplace.canva.com/EAFGQMt71pY/1/0/900w/canva-beige-minimalistic-modern-coming-soon-launch-instagram-story-EHlckPPs49E.jpg"
        profileSrc="https://impulse.aarafacademy.com/uploads/samples/g1.jpg"
        title="Meenakshi Pandey"
      />
      <Story
        image="https://i.pinimg.com/736x/27/9e/21/279e21536dbb08d5f9101a0eab26ed87.jpg"
        profileSrc="https://impulse.aarafacademy.com/uploads/samples/b1.jpg"
        title="Aryan Gupta"
      />
    </div>
  );
}

export default StoryReel;
