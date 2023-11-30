const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Movie CRUD routes
router.post('/', movieController.createMovie);
router.get('/', movieController.getAllMovies);
router.get('/:movieId', movieController.getMovieById);
router.put('/:movieId', movieController.updateMovie);
router.delete('/:movieId', movieController.deleteMovie);

// Review routes
router.post('/:movieId/reviews', movieController.addReview);
router.get('/:movieId/reviews', movieController.getAllReviews);
router.put('/:movieId/reviews/:reviewId', movieController.updateReview);
router.delete('/:movieId/reviews/:reviewId', movieController.deleteReview);

module.exports = router;