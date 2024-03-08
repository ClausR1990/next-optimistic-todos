import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

async function createTodos() {
  const newTodo = await prisma.todo.create({
    data: {
      title: faker.lorem.sentence(),
      completed: faker.datatype.boolean(),
    },
  });
  console.log(newTodo);
}

async function main() {
  for (let i = 0; i < 50; i++) {
    await createTodos();
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
