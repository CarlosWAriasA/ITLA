const http = require("http");
const route = require("./routes/route");

const server = http.createServer(route);

server.listen(3000);

