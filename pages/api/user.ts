import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

// this will wrap the handler
// won't call the handler unless authenticated and user is passed
export default validateRoute(async (req, res, caseManager) => {
  const studentCount = await prisma.student.count({
    where: {
      userId: caseManager.id,
    },
  });
  // console.log(studentCount);
  res.json({ ...caseManager, studentCount });
});
