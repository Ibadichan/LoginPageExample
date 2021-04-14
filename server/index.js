require('dotenv').config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('./config/index');

const app = express();
const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(cors(config.cors));

app.use(
  '/proxy',
  createProxyMiddleware({
    target: process.env.RUCAPTCHA_API_URL,
    changeOrigin: true,
    pathRewrite: {
      [`^/proxy`]: '',
    },
  })
);

if (isProduction) {
  app.use(express.static(path.join(__dirname, '../build')));

  app.get('/*', (request, response) => {
    response.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${port}`);
});
