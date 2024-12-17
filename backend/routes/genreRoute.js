import express from "express";

const genreRoute = express.Router();

// Controllers
import { createGenre , updateGenre , removeGenre , listGenres , readGenre} from "../controllers/genreController.js";

// Middlewares
import { authenticate, authenticateAsAdmin } from "../middlewares/authMiddleware.js";

genreRoute.route("/").post(authenticate, authenticateAsAdmin, createGenre);
genreRoute.route("/:id").put(authenticate, authenticateAsAdmin, updateGenre);
genreRoute.route("/:id").delete(authenticate, authenticateAsAdmin,removeGenre);
genreRoute.route("/genres").get(listGenres);
genreRoute.route("/:id").get(readGenre)


export default genreRoute;