const express = require('express');
const app = express();
let server = null;
app.get('/', (req, res) => {
  res.send('Hello World!');
});
function startServer() {
  server = app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
}
function stopServer() {
  if (server) {
    server.close(() => {
      console.log('Server closed');
    });
  }
}
startServer();
//To stop server gracefully
//stopServer();
//Then you can restart the server
//startServer();