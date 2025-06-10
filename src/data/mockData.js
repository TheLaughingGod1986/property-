export const mockPropertyData = [
  {
    id: 1,
    address: "123 High Street",
    postcode: "SW1A 1AA",
    type: "Apartment",
    price: 350000,
    monthlyRent: 1500,
    yield: (1500 * 12 / 350000) * 100,
    roi: ((1500 * 12) - 3500) / 350000 * 100
  },
  {
    id: 2,
    address: "45 Park Lane",
    postcode: "SW1A 1BB",
    type: "House",
    price: 650000,
    monthlyRent: 2700,
    yield: (2700 * 12 / 650000) * 100,
    roi: ((2700 * 12) - 6500) / 650000 * 100
  },
  {
    id: 3,
    address: "8 Church Road",
    postcode: "SW1A 2AA",
    type: "Terraced House",
    price: 480000,
    monthlyRent: 1950,
    yield: (1950 * 12 / 480000) * 100,
    roi: ((1950 * 12) - 4800) / 480000 * 100
  },
  {
    id: 4,
    address: "15 Queen's Gardens",
    postcode: "W2 3BB",
    type: "Apartment",
    price: 420000,
    monthlyRent: 1850,
    yield: (1850 * 12 / 420000) * 100,
    roi: ((1850 * 12) - 4200) / 420000 * 100
  },
  {
    id: 5,
    address: "72 King's Road",
    postcode: "W2 4CC",
    type: "House",
    price: 780000,
    monthlyRent: 3200,
    yield: (3200 * 12 / 780000) * 100,
    roi: ((3200 * 12) - 7800) / 780000 * 100
  }
];