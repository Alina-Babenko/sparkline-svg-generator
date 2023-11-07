const generateMockData = (currencyId, interval, tokenId) => {
  return Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
};

module.exports = {
  generateMockData,
};
