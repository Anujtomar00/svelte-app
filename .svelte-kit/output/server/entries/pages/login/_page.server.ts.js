import { c as cookie } from "../../../chunks/cookie.js";
import { A as AUTH_TOKEN_EXPIRY_SECONDS } from "../../../chunks/constants.server.js";
import { i as invalid } from "../../../chunks/index2.js";
import debug from "debug";
const log = debug("app:routes:login:page.server");
const actions = {
  async default(event) {
    const data = await event.request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const resp = await cookie.login({
      email,
      password,
      opts: { cookies: event.cookies }
    });
    if (resp.isErr()) {
      const error = (String(resp.error) ?? "No account with that email or username could be found.").trim();
      return invalid(401, { email, error });
    }
    const user = resp.value;
    log("user:", user);
    if (user && user.token) {
      event.cookies.set("auth_token", `${user.id}:${user.token}`, {
        path: "/",
        maxAge: AUTH_TOKEN_EXPIRY_SECONDS
      });
    }
    log("redirecting user...");
    delete user.token;
    return { user };
  }
};
export {
  actions
};
