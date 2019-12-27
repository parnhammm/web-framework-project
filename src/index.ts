import { UserForm } from "./App/UI/UserForm";
import { User } from "./App/User";

const user = User.buildUser({ name: "Andrew", age: 26 });
const root = document.getElementById("root");

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error("Root element not found");
}
