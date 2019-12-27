import { View } from "./View";
import { User, UserDefinition } from "../User";

export class UserShow extends View<UserDefinition, User> {
  template(): string {
    return `
    <div>
      <h1>User Detail</h1>
      <div>User Name: ${this.model.get("name")}</div>
      <div>Age: ${this.model.get("age")}</div>
    </div>
    `;
  }
}
