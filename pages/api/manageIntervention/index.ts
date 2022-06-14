import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { title, description, provider, setting, student } = req.body;

  const result = await prisma.intervention.create({
    data: {
      title: title,
      description: description,
      provider: provider,
      setting: setting,
      student: {
        connect: { id: 105 },
      },
    },
  });
  res.json(result);
}
