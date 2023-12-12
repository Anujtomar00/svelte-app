async function load(event) {
  var _a;
  const user = (_a = event.locals) == null ? void 0 : _a.user;
  if (!user)
    return { user: null };
  delete user.token;
  return { user };
}
export {
  load
};
