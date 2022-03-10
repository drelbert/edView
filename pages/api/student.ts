import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

// get student list
// components using this function: sidebar, ...
export default validateRoute(async (req, res, student) => {
  const students = await prisma.student.findMany({
    where: {
      userId: student.id,
    },
    orderBy: {
      lastName: "asc",
    },
  });
  // send the studnets back
  res.json(students);
});
