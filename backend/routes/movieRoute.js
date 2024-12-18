import express from "express";

//controller
import {
  createMovie,
  getAllMovies,
  getSpecificMovie,
  updateMovie,
  movieReview,
  deleteMovie,
  deleteComment,
  getNewMovies,
  getTopMovies,
  getRandomMovies,
} from "../controllers/movieController.js";

//middleware
import {
  authenticate,
  authenticateAsAdmin,
} from "../middlewares/authMiddleware.js";
import checkId from "../middlewares/checkId.js";

const movieRoute = express.Router();

//Pubic routes
movieRoute.get("/all-movies", getAllMovies);
movieRoute.get("/specific-movie/:id", getSpecificMovie);
movieRoute.get("/new-movies", getNewMovies);
movieRoute.get("/top-movies", getTopMovies);
movieRoute.get("/random-movies", getRandomMovies);

//Restricted routes

movieRoute.post("/:id/reviews", authenticate, checkId, movieReview);

// Admin routes

movieRoute.post(
  "/create-movie",
  authenticate,
  authenticateAsAdmin,
  createMovie
);
movieRoute.put(
  "/update-movie/:id",
  authenticate,
  authenticateAsAdmin,
  updateMovie
);
movieRoute.delete(
  "/delete-movie/:id",
  authenticate,
  authenticateAsAdmin,
  deleteMovie
);
movieRoute.delete(
  "/delete-comment",
  authenticate,
  authenticateAsAdmin,
  deleteComment
);

export default movieRoute;
