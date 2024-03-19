/* eslint-disable react/prop-types */

import { useState } from "react";
import "./Header.css";

const Header = ({ onSearch, onClear }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (localSearchTerm.length >= 4) {
      setError("");
      onSearch(localSearchTerm.toLowerCase());
    } else {
      setError("Enter 4 characters!");
    }
  };

  const handleClear = () => {
    setLocalSearchTerm("");
    onClear();
  };

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setLocalSearchTerm(searchTerm);
    if (searchTerm.length >= 4) {
      setError("");
      onSearch(searchTerm.toLowerCase());
    } else {
      setError("Enter 4 characters!");
    }
  };

  return (
    <header>
      <div className="logo">MoBooM</div>
      <div className="search-bar">
        <div className="search-input-wrapper">
          <input
            type="text"
            id="searchInput"
            placeholder="What do you want to buy today?"
            value={localSearchTerm}
            onChange={handleInputChange}
            className="search-input"
          />
          {localSearchTerm && (
            <button className="clear-button" onClick={handleClear}>
              X
            </button>
          )}
        </div>
      </div>
      <div className="error-message">{error}</div>
      <nav>
        <ul className="menu-wrapper">
          <li>Store</li>
          <li>Account</li>
          <li>Wish List</li>
          <li>Basket</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

/*
import { useState } from "react";
import "./Header.css";

const Header = ({ onSearch, onClear }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (localSearchTerm.length >= 4) {
      setError("");
      onSearch(localSearchTerm.toLowerCase());
    } else {
      setError("Enter 4 characters!");
    }
  };

  const handleClear = () => {
    setLocalSearchTerm("");
    onClear();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header>
      <div className="logo">MoBooM</div>
      <div className="search-bar">
        <div className="search-input-wrapper">
          <input
            type="text"
            id="searchInput"
            placeholder="What do you want to buy today?"
            value={localSearchTerm}
            onChange={(e) => setLocalSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="search-input"
          />
          {localSearchTerm && (
            <button className="clear-button" onClick={handleClear}>
              X
            </button>
          )}
        </div>
      </div>
      <div className="error-message">{error}</div>
      <nav>
        <ul className="menu-wrapper">
          <li>Store</li>
          <li>Account</li>
          <li>Wish List</li>
          <li>Basket</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
 */
