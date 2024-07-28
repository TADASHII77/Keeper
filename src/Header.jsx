import React, { useState } from "react";
import details from "../src/assets/details.png";

function Header({ searchTerm, onSearchChange }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(!showPopup);
  };

  const handleCloseClick = () => {
    setShowPopup(false);
  };

  return (
    <header>
      <div className="searchcontainer">
        <h1>Keeper</h1>
        <input
          className="searchbox"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={onSearchChange}
        />
        <button
          style={{
            backgroundColor: "whitesmoke",
            margin: "10px 10px",
            borderRadius: "200px",
          }}
          onClick={handleButtonClick}
        >
          Click
        </button>
      </div>
      {showPopup && (
        <div className="popup">
          <button className="close-button" onClick={handleCloseClick}>
            X
          </button>
          <img src={details} alt="Popup" className="popup-image" />
        </div>
      )}
    </header>
  );
}

export default Header;
