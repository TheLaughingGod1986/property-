// Function to fetch UK postcodes and enhance mock property data
export const fetchPropertyData = async () => {
  try {
    // Get some random UK postcodes
    const response = await fetch('https://api.postcodes.io/random/postcodes?limit=5');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    
    // Create properties with real UK postcodes but mock financial data
    return data.result.map((item, index) => {
      const price = 250000 + Math.floor(Math.random() * 750000);
     const monthlyRent = Math.floor(price * 0.04); // ~4% annual yield
      
      return {
        id: index + 1,
        address: `${Math.floor(Math.random() * 200) + 1} ${item.postcode.split(' ')[0]} Street`,
        postcode: item.postcode,
        type: ['Detached', 'Semi-Detached', 'Terraced', 'Apartment'][Math.floor(Math.random() * 4)],
        price: price,
        monthlyRent: monthlyRent,
        yield: (monthlyRent * 12 / price) * 100,
        roi: ((monthlyRent * 12) - (price * 0.01)) / price * 100
      };
    });
  } catch (error) {
    console.error('Error fetching property data:', error);
    // Return fallback mock data
    return [
      {
        id: 1,
        address: "123 test Street",
        postcode: "SW1A 1AA",
        type: "Apartment",
        price: 350000,
        monthlyRent: 1400,
        yield: (1400 * 12 / 350000) * 100,
        roi: ((1400 * 12) - 3500) / 350000 * 100
      },
      // Add more fallback properties as needed
    ];
  }
};