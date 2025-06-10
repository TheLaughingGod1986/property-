import React, { useState } from 'react';
import './App.css';
import PropertySearch from './components/PropertySearch';
import PropertyResults from './components/PropertyResults';
import { mockPropertyData } from './data/mockData';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (postcode) => {
    setIsLoading(true);
    setError(null);
    
    // Simulate API call with timeout
    setTimeout(() => {
      try {
        // Filter mock data based on postcode
        const results = mockPropertyData.filter(
          property => property.postcode.toLowerCase().includes(postcode.toLowerCase())
        );
        
        setSearchResults(results);
        setIsLoading(false);
        
        if (results.length === 0) {
          setError("No properties found for this postcode");
        }
      } catch (err) {
        setError("Error searching properties");
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Property Yield Calculator</h1>
        <p>Find investment properties and calculate ROI by postcode</p>
      </header>
      
      <main className="App-main">
        <PropertySearch onSearch={handleSearch} />
        
        {isLoading && <div className="loading">Loading...</div>}
        {error && <div className="error">{error}</div>}
        
        {!isLoading && !error && searchResults.length > 0 && (
          <PropertyResults properties={searchResults} />
        )}
      </main>
    </div>
  );
}

export default App;