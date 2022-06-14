// api endpoint for services
import prisma from "../../lib/prisma";

export default async function services(req, res) {
  const services = await prisma.service.findMany({
    include: {
      student: {
        select: {
          lastName: true,
        },
      },
    },
  });
  res.json(services);
}
