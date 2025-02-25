import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg",
    "https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png",
    "https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s",
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      loadNextImage();
    }, 3000);

    return () => {
      clearInterval(i);
    };
  }, []);

  const loadNextImage = () => {
    setActive((active) => (active + 1) % images.length);
  };

  const loadPrevImage = () => {
    setActive((active) => (active - 1 < 0 ? images.length - 1 : active - 1));
  };

  const containerStyle = {
    margin: '8px', // equivalent to m-2
    padding: '8px', // equivalent to p-2
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const arrowStyle = {
    width: '80px', // equivalent to w-20
    height: '80px', // equivalent to h-20
    cursor: 'pointer',
  };

  const imageStyle = {
    width: '800px', // equivalent to w-[800px]
  };

  return (
    <div>
      <div style={containerStyle}>
        <img
          onClick={loadPrevImage}
          style={arrowStyle}
          alt="left arrow"
          src="https://cdn0.iconfinder.com/data/icons/glyphpack/26/nav-arrow-left-512.png"
        />
        <img style={imageStyle} src={images[active]} alt="wallpaper" />
        <img
          onClick={loadNextImage}
          style={arrowStyle}
          alt="right arrow"
          src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
