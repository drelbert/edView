import fetcher from "./fetcher";

export function auth(
  // just another example of inline types
  mode: "signin" | "signup",
  body: { email: string; password: string; firstName: string; lastName: string }
) {
  return fetcher(`/${mode}`, body);
}
