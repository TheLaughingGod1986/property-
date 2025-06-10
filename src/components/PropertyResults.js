import React from 'react';
import './PropertyResults.css';

function PropertyResults({ properties }) {
  return (
    <div className="property-results">
      <h2>Results ({properties.length} properties found)</h2>
      
      <div className="results-table-container">
        <table className="results-table">
          <thead>
            <tr>
              <th>Address</th>
              <th>Postcode</th>
              <th>Property Type</th>
              <th>Price (£)</th>
              <th>Monthly Rent (£)</th>
              <th>Annual Yield (%)</th>
              <th>ROI (%)</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property.id}>
                <td>{property.address}</td>
                <td>{property.postcode}</td>
                <td>{property.type}</td>
                <td>{property.price.toLocaleString()}</td>
                <td>{property.monthlyRent.toLocaleString()}</td>
                <td>{property.yield.toFixed(2)}%</td>
                <td>{property.roi.toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PropertyResults;