import { c as cookie } from "../../../chunks/cookie.js";
import { A as AUTH_TOKEN_EXPIRY_SECONDS } from "../../../chunks/constants.server.js";
import { i as invalid } from "../../../chunks/index2.js";
const actions = {
  async default(event) {
    const data = await event.request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const password_confirm = data.get("password-confirm");
    if (!email)
      return invalid(422, { email, error: "An email address is required." });
    if (!password)
      return invalid(422, { email, error: "A password is required." });
    if (password.length < 8)
      return invalid(422, {
        email,
        error: "Password must be at least 8 characters long."
      });
    if (password.length > 32)
      return invalid(422, {
        email,
        error: "Password cannot be more than 32 characters long."
      });
    if (password !== password_confirm)
      return invalid(422, {
        email,
        error: "Your passwords must match."
      });
    const signup_resp = await cookie.signup({
      email,
      password,
      password_confirm,
      opts: { cookies: event.cookies }
    });
    if (signup_resp.isErr()) {
      const error = (String(signup_resp.error) ?? "There was an issue creating your account. Please try again.").trim();
      return invalid(500, { email, error });
    }
    const login_resp = await cookie.login({
      email,
      password,
      opts: { cookies: event.cookies }
    });
    if (login_resp.isErr()) {
      const error = (String(login_resp.error) ?? "Could not sign you in. Please try again.").trim();
      return invalid(500, { email, error });
    }
    const user = login_resp.value;
    if ((user == null ? void 0 : user.id) && (user == null ? void 0 : user.token)) {
      event.cookies.set("auth_token", `${user.id}:${user.token}`, {
        path: "/",
        maxAge: AUTH_TOKEN_EXPIRY_SECONDS
      });
    }
    delete user.token;
    return { user };
  }
};
export {
  actions
};
