const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const { generateMockData } = require('../utils/dataGenerator');

const generateSparkline = async (data) => {
  const width = 164;
  const height = 48;
  const chartJSNodeCanvas = new ChartJSNodeCanvas({ type: 'svg', width, height, backgroundColour: 'transparent' });

  const configuration = {
    type: 'line',
    data: {
      labels: [...Array(data.length).keys()], // Creating a label for each data point
      datasets: [{
        data,
        borderColor: '#00c853',
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
        // tension: 0.4,
      }],
    },
    options: {
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      elements: {
        point: {
          radius: 0 // Hide points
        }
      },
      plugins: {
        legend: {
          display: false, // Do not display the legend
        },
      },
      maintainAspectRatio: false,
    },
  };

  try {
    return await chartJSNodeCanvas.renderToBufferSync(configuration);
  } catch (e) {
    console.error('Error generating sparkline:', e);
  }
};

const getSparklineSVG = async (currencyId, interval, tokenId) => {
  // TODO: Replace with actual data fetching logic
  const data = generateMockData(currencyId, interval, tokenId);
  return await generateSparkline(data);
};

module.exports = {
  getSparklineSVG,
};
