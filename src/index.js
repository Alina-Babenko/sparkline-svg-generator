const express = require('express');
const sparklineRoutes = require('./api/sparklineRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

const app = express();
const port = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Use the sparkline routes
app.use('/sparkline', sparklineRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg" alt="bitcoin-7d-price-graph" class="sc-66133f36-0 flXWZT isUp" loading="lazy">
