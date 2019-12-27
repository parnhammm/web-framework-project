import { Collection } from "./Core/Models/Collection";
import { UserDefinition, User } from "./App/User";
import { UserList } from "./App/UI/UserList";

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserDefinition) => {
    return User.buildUser(json);
  }
);

users.on("change", () => {
  const root = document.getElementById("root");

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
