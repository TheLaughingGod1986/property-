import React, { useState } from 'react';
import './PropertySearch.css';

function PropertySearch({ onSearch }) {
  const [postcode, setPostcode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postcode.trim()) {
      onSearch(postcode.trim());
    }
  };

  return (
    <div className="property-search">
      <h2>Search Properties</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="postcode">Postcode:</label>
          <input
            type="text"
            id="postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="Enter postcode (e.g., SW1A 1AA)"
            required
          />
        </div>
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
}

export default PropertySearch;