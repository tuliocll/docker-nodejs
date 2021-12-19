const http = require("http");
const gracefulShutdown = require("http-graceful-shutdown");

const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.write("Meu servidor HTTP rodando no Docker");
    res.end();
  }, 20000);
});

server.listen(3333, () => console.log("Servidor iniciado"));

gracefulShutdown(server);
