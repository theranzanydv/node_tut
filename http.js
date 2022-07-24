const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello , This is the first node server");
  }
  if (req.url === "/about") {
    res.end("This is the About page");
  } else {
    res.end(`
      <h1>Oops!!!</h1>
      <p>Page not found</p>
      <a href='/'>Go Home</a>
      `);
  }
});

server.listen(3000);
