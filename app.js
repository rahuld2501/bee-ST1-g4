const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/movieDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/movies', movieRoutes);
app.use('/api/reviews', reviewRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});