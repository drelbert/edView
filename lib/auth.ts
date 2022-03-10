import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

// higher order function used as middleware
// this function is a handler generating its own handler checkAndCall
// to protect the api routes aka gatekeeper
export const validateRoute = function validate(handler) {
  // handler function that takes in req and res
  return async function checkAndCall(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    // destructruing the cookie name: renamed it to token
    const { EDVIEW_ACCESS_TOKEN: token } = req.cookies;
    // decoding the jwt
    // try to get a user from the token
    if (token) {
      let user;
      // keep the app from cashing due to a bad token
      try {
        const { id } = jwt.verify(token, "resetThis");
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("Not a registered user.");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "No token, no valid user." });
        return;
      }
      // passing the user along to the next handler
      return handler(req, res, user);
    }
    res.status(401);
    res.json({ error: "No valid token." });
  };
};

// for use with user/students[] to pass the id to get the user's students
export const validateToken = function getStudentsByUser(token) {
  // get the user via jwt.verify
  const user = jwt.verify(token, "resetThis");
  return user;
};
