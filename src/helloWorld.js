const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/hello-world', (req, res) => {
  res.send('Hello World from the api!');
});

app.listen(port, () => console.log(`hello from port ${port}!`));