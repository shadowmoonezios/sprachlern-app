const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// MongoDB-Verbindung
const dbURI = 'mongodb://localhost:27017/sprachlern-app';
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('Mit MongoDB verbunden.');
}).catch(err => {
  console.error('MongoDB Verbindung fehlgeschlagen:', err);
});

app.get('/', (req, res) => {
  res.send('Willkommen zur Sprachlern-App!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});