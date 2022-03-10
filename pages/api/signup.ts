import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function singUp(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const salt = bcrypt.genSaltSync();
  const { email, password, firstName, lastName } = req.body;

  let user;
  // try to create
  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
        firstName,
        lastName,
      },
    });
    // handle the error, ie email already exists
  } catch (error) {
    res.status(401);
    res.json({ error: "Email is already in use, please use another." });
    return;
  }
  // passing in three arguments to .sign
  // user object, a secret prop, and expires in object
  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
      time: Date.now(),
    },
    "hi",
    { expiresIn: "2h" }
  );
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("EDVIEW_ACCESS_TOKEN", token, {
      httpOnly: true,
      maxAge: 2 * 60 * 60,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })
  );
  res.json(user);
}
