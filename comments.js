// Create web server
// Create a web server that listens to incoming requests on port 3000 and returns the comments data as a response.

const http = require("http");
const comments = require("./comments");
const port = 3000;

const requestListener = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify(comments));
};

const server = http.createServer(requestListener);
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});