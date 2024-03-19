/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import "./ProductList.css";

const ProductList = ({ searchTerm }) => {
  const { products, loading, selectedCategory } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (searchTerm === "" ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const lastIndexOfPosts = currentPage * postPerPage;
  const firstIndexOfPosts = lastIndexOfPosts - postPerPage;
  const currentPosts = filteredProducts.slice(
    firstIndexOfPosts,
    lastIndexOfPosts
  );

  const renderStarRating = (rating) => {
    const filledStars = Math.floor(rating);
    const remainder = rating - filledStars;

    const starArray = Array.from({ length: filledStars }, (_, index) => (
      <span key={index} className="star">
        ★
      </span>
    ));

    if (remainder > 0) {
      starArray.push(
        <span key="half-star" className="star">
          ☆
        </span>
      );
    }

    return starArray;
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 6) {
      return `${words.slice(0, 6).join(" ")}...`;
    }
    return description;
  };

  let pages = [];

  for (let i = 1; i <= Math.ceil(filteredProducts.length / postPerPage); i++) {
    pages.push(i);
  }

  const handleNextPostPage = () => {
    currentPage !== pages.length && setCurrentPage(currentPage + 1);
  };

  const handlePrevPostPage = () => {
    currentPage !== 1 && setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="product-list">
        {currentPosts.length === 0 ? (
          <p className="no-items-found">No items found.</p>
        ) : (
          currentPosts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
              />
              <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">
                  {truncateDescription(product.description)}
                </p>
                <p className="product-price">${product.price}</p>
                <div className="product-rating">
                  {renderStarRating(product.rating)}
                </div>
                <button className="wishlist-button">&#x2661;</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="pagination-buttons">
        <button onClick={handlePrevPostPage} disabled={currentPage === 1}>
          Previous
        </button>
        {pages.map((item, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(item)}
            className={currentPage === item ? "current-page" : ""}>
            {item}
          </button>
        ))}
        <button
          onClick={handleNextPostPage}
          disabled={currentPage === pages.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
