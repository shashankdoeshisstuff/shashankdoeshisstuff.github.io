const jsonServer = require("json-server"); // importimg json-server library
const server = jsonServer.create();
const route = jsonServer.router("./json-files/little_lemon_database.json");
const middleares = jsonServer.defaults();
const port = process.env.PORT || 8080; // choose port from here

server.use(middlewares);
server.use(router);

server.listen(port);