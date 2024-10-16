import React from "react";

function VideoSection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginBottom: "30px",
        marginTop: "50px",
      }}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/d6gEhT29QTI?autoplay=1&mute=1"
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoSection;
