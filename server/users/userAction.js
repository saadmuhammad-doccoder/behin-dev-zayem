import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

async function getUserById(id) {
  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    if (!user) throw new Error("Could not get user");
    return user;
  } catch (e) {
    console.error(e);
  }
}

async function createUser({ email, name }) {
  try {
    if (!emailRegex.test(email)) throw new Error("Enter valid email address.");
    const newUser = { email: email, name: name };
    await prisma.user.create({
      data: newUser,
    });
  } catch (e) {
    console.error(e);
  }
}

export { getUserById, createUser };
