import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 10;

function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }&select=title,price,description,thumbnail,discountPercentage`
    );
    const json = await data.json();
    setProducts(json.products);
    setNoOfPages(Math.ceil(json.total / LIMIT));
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  const paginationStyle = {
    padding: "40px",
    cursor: "pointer",
  };

  const pageNumberStyle = (isActive) => ({
    fontSize: "1.25rem", // text-xl
    padding: "16px",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "underline" : "none",
  });

  return (
    <div>
      <div style={containerStyle}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div style={paginationStyle}>
        {currentPage > 0 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          >
            Prev
          </span>
        )}
        {[...Array(noOfPages).keys()].map((pN) => (
          <span
            key={pN}
            style={pageNumberStyle(pN === currentPage)}
            onClick={() => setCurrentPage(pN)}
          >
            {pN + 1}
          </span>
        ))}
        {currentPage < noOfPages - 1 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
}

export default Pagination;
