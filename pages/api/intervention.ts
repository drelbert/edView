// api endpoint for interventions
import prisma from "../../lib/prisma";

export default async function invterventions(req, res) {
  const interventions = await prisma.intervention.findMany({
    include: {
      student: {
        select: {
          lastName: true,
          firstName: true,
        },
      },
    },
  });
  res.json(interventions);
}
