const http = require("node:http");

const TARGET = "https://mikufans.site";

http.createServer((req, res) => {
  const incoming = new URL(req.url, "http://localhost");
  const destination = new URL(TARGET);

  destination.pathname = incoming.pathname;
  destination.search = incoming.search;

  res.writeHead(301, {
    Location: destination.toString(),
    "Cache-Control": "no-store"
  });

  res.end();
}).listen(process.env.PORT || 3000, "0.0.0.0");
