const VideoStream = () => {
    return (
      <div style={{ margin: "20px" }}>
        {/* <iframe
          width="1200"
          height="600"
          src="https://www.youtube.com/embed/4xDzrJKXOOY?si=GC4yRwBjKDaji8Jm"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ border: "none" }}
        ></iframe> */}
        <iframe width="560" height="315"
         src="https://www.youtube.com/embed/JfKBUuOtsPg?si=pz67loZj3t2ONIjg"
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            
          </iframe>
      </div>
    );
  };
  
  export default VideoStream;
  