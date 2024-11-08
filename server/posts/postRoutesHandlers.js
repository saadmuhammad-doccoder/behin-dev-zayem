import { createPost, getAllPosts, getPostbyId } from "./postActions.js";

async function getAllPostsReqHandler(req, res) {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (e) {
    res.status(500).json({ message: "Failed to fetch posts." });
  }
}

async function getPostByIdReqHandler(req, res) {
  try {
    const parsedId = parseInt(req.params.id);
    const posts = await getPostbyId(parsedId);
    res.json(posts);
  } catch (e) {
    res.status(500).json({ message: "Failed to fetch post." });
  }
}

async function createPostReqHandler(req, res) {
  try {
    if (!req.body || req.body.length === 0)
      throw new Error("Empty request body");

    const { title, content, author } = req.body;

    console.log(title, content, author);
    if (!title || !content || !author)
      throw new Error("Could not create post.");

    const newPost = { title: title, content: content, author: author };
    res.status(201).json({ message: "Post created successfully" });
    await createPost(newPost);
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: e.message });
  }
}

export { getAllPostsReqHandler, getPostByIdReqHandler, createPostReqHandler };
