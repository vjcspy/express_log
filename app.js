const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3005;

// Middleware để phân tích JSON từ body của request
app.use(bodyParser.json());

// Định nghĩa route POST
app.post('/log', (req, res) => {
  console.log('Received body:', JSON.stringify({ necessaryPart: req.body.necessaryPart }, undefined, 4)); // In nội dung cần thiết lên console
  res.status(200).send('Request body successfully received');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
