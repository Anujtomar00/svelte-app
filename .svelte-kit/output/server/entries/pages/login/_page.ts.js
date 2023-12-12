import { r as redirect } from "../../../chunks/index2.js";
async function load(event) {
  const { user } = await event.parent();
  if (user)
    throw redirect(303, "/");
  return { title: "Log In" };
}
export {
  load
};
