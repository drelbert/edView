import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const authenticatedPages = [
  "/",
  "/students",
  "/dataViews",
  "/reactPractice",
  "/addIntervention",
];

// edge function
// running closer to the user not client or server side
export default function middleware(request: NextRequest) {
  if (authenticatedPages.find((p) => p === request.nextUrl.pathname)) {
    const token = request.cookies.EDVIEW_ACCESS_TOKEN;
    const url = request.nextUrl.clone();
    // any attempted access results in user sent to /signin
    url.pathname = "/signin";

    if (!token) {
      return NextResponse.rewrite(url);
    }
  }
}
