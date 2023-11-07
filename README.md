# Sparkline SVG Generator


![Sparkline SVG](sparkline.svg)

This project provides a simple HTTP server built with Express.js that generates sparkline SVG images for cryptocurrency data. It uses the `chartjs-node-canvas` library to render the sparkline charts server-side.

## Features

- Generate sparkline SVG images dynamically based on provided parameters.
- Customizable chart appearance and size.
- Scalable endpoint that can be integrated with real data sources.

## Installation
Before you begin, ensure you have [Node.js](https://nodejs.org/) installed on your system.

## Usage
```sh
npm install
```
To start the server, run the following command in your terminal:
```sh
npm start
```
Or if you prefer to use node directly:
```sh
node src/index.js
```
The server will start on the default port 3000, or on the port specified by the PORT environment variable.

## Swagger API Documentation

This project includes an auto-generated interactive API documentation using Swagger (OpenAPI). This allows you to visualize and interact with the API's endpoints directly from your browser. The Swagger UI is available at `/api-docs` when the server is running, providing a detailed overview of the available API operations, their parameters, and responses for easy testing and integration.
