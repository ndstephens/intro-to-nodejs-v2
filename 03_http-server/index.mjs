import http from 'http';

const host = 'localhost'; // '0.0.0.0' or '127.0.0.1'
const port = 8000;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      if (req.headers['content-type'] === 'application/json') {
        body = JSON.parse(body);
      }

      console.log(body);
      res.writeHead(201);
      res.end('ok');
    });
  } else {
    res.writeHead(200);
    res.end('hello from my server');
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

// I've installed "httpie" with "brew" to use instead of "curl"
// When on localhost you only need to provide the port (ie ":8000")

// GET request
// http :8000

// POST request
// http POST :8000 color=red food=pizza
