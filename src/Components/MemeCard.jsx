export const MemeCard = ({ data }) => {
  const { url, title, author } = data;

  const cardStyle = {
    padding: '20px',
    margin: '20px',
    border: '1px solid black',
    borderRadius: '8px',
  };

  const imgStyle = {
    width: '256px',  // equivalent to 16rem in Tailwind (64 * 4px)
    height: '256px', // equivalent to 16rem in Tailwind (64 * 4px)
  };

  return (
    <div style={cardStyle}>
      <img style={imgStyle} alt="meme" src={url} />
      <p>{author}</p>
    </div>
  );
};
