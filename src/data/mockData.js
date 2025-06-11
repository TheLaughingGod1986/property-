// Export mock property data as a constant variable // Each object represents a single property with various properties such as id, address, type, price, yield and ROI
export const mockPropertyData = [
  {
    id: 1, // Property ID
    address: "123 High Street", // Address of the property
    postcode: "SW1A 1AA", // Postcode of the property
    type: "Apartment", // Type of the property (e.g. Apartment, House)
    price: 350000, // Price of the property
    yield: (1500 * 12 / 350000) * 100, // Annual yield of the property as a percentage
    roi: ((1500 * 12) - 3500) / 350000 * 100, // Annual return on investment of the property as a percentage
  },
  {
    id: 2, // Property ID
    address: "45 Park Lane", // Address of the property
    postcode: "SW1A 1BB", // Postcode of the property
    type: "House", // Type of the property (e.g. Apartment, House)
    price: 650000, // Price of the property
    monthlyRent: 2700, // Monthly rent for the property
    yield: (2700 * 12 / 650000) * 100, // Annual yield of the property as a percentage
    roi: ((2700 * 12) - 6500) / 650000 * 100, // Annual return on investment of the property as a percentage
  },
  {
    id: 3, // Property ID
    address: "8 Church Road", // Address of the property
    postcode: "SW1A 2AA", // Postcode of the property
    type: "Terraced House", // Type of the property (e.g. Apartment, House)
    price: 480000, // Price of the property
    monthlyRent: 1950, // Monthly rent for the property
    yield: (1950 * 12 / 480000) * 100, // Annual yield of the property as a percentage
    roi: ((1950 * 12) - 4800) / 480000 * 100, // Annual return on investment of the property as a percentage
  },
  {
    id: 4, // Property ID
    address: "15 Queen's Gardens", // Address of the property
    postcode: "W2 3BB", // Postcode of the property
    type: "Apartment", // Type of the property (e.g. Apartment, House)
    price: 420000, // Price of the property
    monthlyRent: 1850, // Monthly rent for the property
    yield: (1850 * 12 / 420000) * 100, // Annual yield of the property as a percentage
    roi: ((1850 * 12) - 4200) / 420000 * 100, // Annual return on investment of the property as a percentage
  },
  {
    id: 5, // Property ID
    address: "72 King's Road", // Address of the property
    postcode: "W2 4CC", // Postcode of the property
    type: "House", // Type of the property (e.g. Apartment, House)
    price: 780000, // Price of the property
    monthlyRent: 3200, // Monthly rent for the property
    yield: (3200 * 12 / 780000) * 100, // Annual yield of the property as a percentage
    roi: ((3200 * 12) - 7800) / 780000 * 100, // Annual return on investment of the property as a percentage
  }
];