import { NextApiRequest, NextApiResponse } from "next";
import { validateToken } from "../../../lib/auth";
import prisma from "../../../lib/prisma";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, email, title, provider, setting, description } =
    req.body;

  let caseManager;
  // get current user id
  caseManager = validateToken(req.cookies.EDVIEW_ACCESS_TOKEN);

  // pass it as a param and then an argument for use in the .create method
  const result = await prisma.student.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      interventions: {
        create: {
          title: title,
          provider: provider,
          setting: setting,
          description: description,
        },
      },
      caseManager: {
        connect: {
          id: caseManager.id,
        },
      },
    },
  });
  res.json(result);
}
