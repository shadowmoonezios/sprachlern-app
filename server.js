const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// MongoDB-Verbindung
mongoose.connect('mongodb://localhost:27017/sprachlern-app?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
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