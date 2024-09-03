const Shimmer = () => {
  const containerStyle = {
    padding: '20px',
    margin: '20px',
    border: '1px solid black',
    borderRadius: '8px',
  };

  const shimmerStyle = {
    width: '256px',  // equivalent to 16rem in Tailwind (64 * 4px)
    height: '256px', // equivalent to 16rem in Tailwind (64 * 4px)
    backgroundColor: '#E5E7EB', // equivalent to bg-gray-200
  };

  return Array(15)
    .fill(0)
    .map((n, i) => (
      <div key={i} style={containerStyle}>
        <div style={shimmerStyle}></div>
      </div>
    ));
};

export default Shimmer;
