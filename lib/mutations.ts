import fetcher from "./fetcher";

// making an api call to one of the two modes using fetcher
export function auth(
  // just another example of inline types, mode and body are not required
  mode: "signin" | "signup",
  body: { email: string; password: string; firstName: string; lastName: string }
) {
  return fetcher(`/${mode}`, body);
}

// any other mutations to the db will go here
// instead of in a component
