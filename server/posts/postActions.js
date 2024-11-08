import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllPosts() {
  try {
    const posts = await prisma.post.findMany();
    if (!posts) throw new Error("Could not get posts");
    console.log(posts);
    return posts;
  } catch (e) {
    console.error(e);
  }
}

async function getPostbyId(id) {
  try {
    const post = await prisma.post.findUnique({ where: { id: id } });
    if (!post) throw new Error("Could not get post");
    return post;
  } catch (e) {
    console.error(e);
  }
}

async function createPost({ title, content, author }) {
  try {
    if (!title || !content || !author)
      throw new Error("There was an error while creating post.");

    const newPost = { title: title, content: content, author: author };

    await prisma.post.create({
      data: newPost,
    });
  } catch (e) {
    console.error(e);
  }
}

export { getAllPosts, getPostbyId, createPost };
