const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Route بسيطة
app.get('/hello', (req, res) => {
  res.json({ message: 'سلام من السيرفر 🚀' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

