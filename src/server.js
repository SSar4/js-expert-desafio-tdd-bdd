const http = require("http");
const { createServer } = http;
const PORT = 3000;
const CONTENT_TYPE = "text/html";
const {modules: {DEFAULT_ROUTE, RENT_ROUTE}} = require('./routes')

const router = {
    "/rent:post": RENT_ROUTE,
    default: DEFAULT_ROUTE,
};

const handleRequest = (req, res) => {
    const url = require("url");
    const { pathname } = url.parse(req.url, true);
    const routeKey = `${pathname.toLowerCase()}:${req.method.toLowerCase()}`;
    console.log(routeKey);
    const chosenRoute = router[routeKey] || router.default;

    res.writeHead(200, { "Content-Type": CONTENT_TYPE });
    return chosenRoute(req, res);
};

const server = createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

module.exports = server;
