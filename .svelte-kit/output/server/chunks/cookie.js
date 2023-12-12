import debug from "debug";
import { err, ok } from "neverthrow";
const log = debug("app:lib:auth:cookie");
const seed_user = {
  id: "seed-user-id",
  email: "anuj@example.com",
  password: "anuj1234",
  token: "seed-user-sesion-token"
};
const one_day = 60 * 60 * 24;
const maxAge = one_day * 365;
const cookie = {
  async validate_session({ token, opts }) {
    const [_, session_token] = token.split(":");
    if (!(opts == null ? void 0 : opts.cookies))
      throw new Error("must pass cookies in to options");
    if (!token)
      return err(new Error("no token provided"));
    const users = get_users(opts.cookies);
    log("users:", users);
    const user = users.find((user2) => user2.token === session_token);
    if (!user)
      return err(new Error("no user found"));
    return ok(user);
  },
  async login({ email, password, opts }) {
    if (!(opts == null ? void 0 : opts.cookies))
      return err(new Error("must pass cookies in to options"));
    if (!email)
      return err(new Error("email is required"));
    if (!password)
      return err(new Error("password is required"));
    const users = get_users(opts.cookies);
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user)
      return err(new Error("no user found"));
    user.token = generate_token();
    set_users(
      opts.cookies,
      users.map((u) => {
        if (u.id === user.id)
          u.token = user.token ?? "";
        return u;
      })
    );
    return ok(user);
  },
  async signup({ email, password, password_confirm, opts }) {
    if (!(opts == null ? void 0 : opts.cookies))
      return err(new Error("must pass cookies in to options"));
    if (!email)
      return err(new Error("email is required"));
    if (!password)
      return err(new Error("password is required"));
    if (password !== password_confirm)
      return err(new Error("passwords do not match"));
    const token = generate_token();
    const user = { id: generate_token(), email, password, token };
    const users = get_users(opts.cookies);
    set_users(opts.cookies, [...users, user]);
    return ok(user);
  },
  async logout({ token, opts }) {
    if (!(opts == null ? void 0 : opts.cookies))
      return err(new Error("must pass cookies in to options"));
    opts.cookies.delete("auth_token", { path: "/" });
    set_users(
      opts.cookies,
      get_users(opts.cookies).map((u) => {
        if (u.token === token)
          u.token = void 0;
        return u;
      })
    );
    return;
  }
};
function get_users(cookies) {
  const stored = cookies.get("users");
  if (stored)
    return JSON.parse(stored);
  return [seed_user];
}
function set_users(cookies, users) {
  cookies.set("users", JSON.stringify(users), { path: "/", maxAge });
}
function generate_token() {
  return Math.random().toString(36).slice(2);
}
export {
  cookie as c
};
