import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

// logic
// check user email and pw in db
// if yes
// compare hashed passwords to complete the authentication
// generate the token and set in the cookie
// if not 401, wrong email amd/or pw combo

export default async function signin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;

  // prisma block
  // use prisma client findUnique() method
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  // two parameters: unhashed password and the hashed password
  if (user && bcrypt.compareSync(password, user.password)) {
    // create jwt
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        time: Date.now(),
      },
      "resetThis",
      { expiresIn: "2h" }
    );
    // set the token in the header
    res.setHeader(
      "Set-Cookie",
      // cookie name = "EDVIEW..."
      cookie.serialize("EDVIEW_ACCESS_TOKEN", token, {
        // securing the cookie to only be accessed on http
        httpOnly: true,
        // cookie only valid for 2 hrs
        maxAge: 2 * 60 * 60,
        // routes that access to cookie
        path: "/",
        // ??
        sameSite: "lax",
        // encrypted only in prod
        secure: process.env.NODE_ENV === "production",
      })
    );
    res.json(user);
  } else {
    res.status(401);
    res.json({ error: "Email and Password incorrect." });
  }
}
