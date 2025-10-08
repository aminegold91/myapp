const express = require('express');
const app = express();
const port = 3000;

// هادي تخلي CSS/JS/صور يخدمو مباشرة
app.use(express.static(__dirname));

// Routes مخصصة
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});

app.get('/store', (req, res) => {
  res.sendFile(__dirname + '/store.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



// باش Express يعرف ملفات CSS و JS
//app.use(express.static(__dirname)); // هنا نخلي كل الملفات فالـ root متاحة

//app.get('/', (req, res) => {
 // res.sendFile(path.join(__dirname, 'index.html'));
//});

//app.listen(port, () => {
 // console.log(`السيرفر خدام على http://localhost:${port}`);
//});



