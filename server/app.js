import express from "express";
import logger from "./middleware/logger.js";

import {
  createPostReqHandler,
  getAllPostsReqHandler,
  getPostByIdReqHandler,
} from "./posts/postRoutesHandlers.js";

// App Initialized
const app = express();

// MIDDLEWARE
app.use(logger);
app.use(express.json());

// AUTH ROUTE

// USER ROUTES

// BLOG ROUTES
app.get("/api/posts", getAllPostsReqHandler);
app.get("/api/posts/:id", getPostByIdReqHandler);
app.post("/api/posts", createPostReqHandler);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
