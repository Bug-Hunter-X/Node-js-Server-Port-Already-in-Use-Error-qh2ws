const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//Error: The server will not start because the port is already in use. This is because the previous instance of the server is not closed.
//Solution: Check if the previous instance is closed before starting a new instance.