const express = require('express');
const { getSparklineSVG } = require('../services/sparklineService');
const router = express.Router();

router.get('/:currencyId/:interval/:tokenId.svg', async (req, res) => {
  const { currencyId, interval, tokenId } = req.params;
  try {
    const svgImage = await getSparklineSVG(currencyId, interval, tokenId);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(200).send(svgImage);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
