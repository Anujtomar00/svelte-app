import { j as json } from "../../../../chunks/index2.js";
const GET = (event) => {
  var _a;
  const user = (_a = event.locals) == null ? void 0 : _a.user;
  if (!user)
    return json({ error: "not authorized" }, { status: 401 });
  return json({ id: user.id, email: user.email });
};
export {
  GET
};
