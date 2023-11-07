const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sparkline SVG Generator API',
      version: '1.0.0',
      description: 'This is a simple API for generating sparkline SVG images for cryptocurrency metrics.',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Replace with your server's URL
      },
    ],
  },
  apis: ['./src/docs/*.yaml'],
};

module.exports = swaggerJsDoc(swaggerOptions);
