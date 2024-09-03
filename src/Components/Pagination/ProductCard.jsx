const ProductCard = ({
    id,
    title,
    price,
    description,
    thumbnail,
    discountPercentage,
  }) => {
    const cardStyle = {
      margin: '16px',
      padding: '16px',
      border: '1px solid black',
    };
  
    const imgStyle = {
      height: '12rem', // equivalent to 48 * 4 = 192px
      width: '15rem',  // equivalent to 60 * 4 = 240px
      objectFit: 'fill',
    };
  
    const titleStyle = {
      padding: '8px',
      fontWeight: 'bold',
      fontSize: '1.25rem', // equivalent to text-xl
      width: '15rem',
    };
  
    const priceStyle = {
      padding: '4px',
      fontSize: '1.125rem', // equivalent to text-lg
    };
  
    const descriptionStyle = {
      padding: '4px',
      fontSize: '1rem', // equivalent to text-md
      width: '15rem',
    };
  
    return (
      <div style={cardStyle}>
        <img style={imgStyle} alt={title} src={thumbnail} />
        <h1 style={titleStyle}>
          {id} - {title}
        </h1>
        <h2 style={priceStyle}>
          Rs. {price} - discount of {discountPercentage}%
        </h2>
        <p style={descriptionStyle}>{description}</p>
      </div>
    );
  };
  
  export default ProductCard;
  