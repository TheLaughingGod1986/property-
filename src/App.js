import React, { useState, useEffect, useCallback } from 'react';
import PropertySearch from './components/PropertySearch';
import PropertyResults from './components/PropertyResults';
import { fetchPropertyData } from './data/apidata';

function App() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadProperties = useCallback(async () => {
        setIsLoading(true);
    try {
        const data = await fetchPropertyData();
        setProperties(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch properties:', err);
setError(`Failed to load property data: ${err.message || 'Please try again later.'}`);
      } finally {
        setIsLoading(false);
      }
  }, []);

  useEffect(() => {
    loadProperties();
  }, [loadProperties]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>UK Property Investment Calculator</h1>
      </header>
      <main>
        <PropertySearch />
        
        {isLoading && <p>Loading properties...</p>}
        {error && <p className="error-message">{error}</p>}
        
        {!isLoading && !error && (
          properties.length > 0
            ? <PropertyResults properties={properties} />
            : <p>No properties found.</p>
        )}
      </main>
    </div>
  );
}

export default App;