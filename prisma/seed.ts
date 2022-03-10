// just a one off script
import faker from "@faker-js/faker";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const data = Array.from({ length: 50 }).map(() => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  userId: 1,
}));

async function main() {
  await prisma.student.createMany({
    data,
  });
}

// async function main() {
//   const salt = bcrypt.genSaltSync();
//   const user = await prisma.user.upsert({
//     where: { email: "firstuser@k12.edu" },
//     update: {},
//     create: {
//       email: "firstuser@k12.edu",
//       password: bcrypt.hashSync("secret", salt),
//       firstName: "Alice",
//       lastName: "Admin",
//     },
//   });
// }

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
