import { UserEdit } from "./App/UI/UserEdit";
import { User } from "./App/User";

const user = User.buildUser({ name: "Andrew", age: 26 });
const root = document.getElementById("root");

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
} else {
  throw new Error("Root element not found");
}
