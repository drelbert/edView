import { NextResponse } from "next/server";

const authenticatedPages = ["/", "/students", "/dataViews"];

// edge function
export default function middleware(req) {
  if (authenticatedPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.EDVIEW_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
