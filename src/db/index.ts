import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function databaseActions() {
  async function createItem(itemInfo) {
    let createdItem = await prisma.user.create({ data: itemInfo });
    return createdItem;
  }

  return { createItem };
}
