const httpMiddleware = require("http-proxy-middleware");

// node ,vue
module.exports = function (app) {
  app.use(
    "/ajax",
    httpMiddleware({
      target: "https://m.maoyan.com",
      changeOrigin: true,
    })
  );

  app.use(
    "/api",
    httpMiddleware({
      target: "https://localhost:5000",
      changeOrigin: true,
    })
  );
};

// /api
