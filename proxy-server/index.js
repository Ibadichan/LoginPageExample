require('dotenv').config();

require('dotenv').config()

const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('./config/index');

const app = express();
const port = process.env.PROXY_SERVER_PORT || 3001;

app.use(cors(config.cors));

app.use(
  '*',
  createProxyMiddleware({
    target: process.env.API_URL,
    changeOrigin: true,
  })
);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Proxy Server is listening on ${port}`);
});
