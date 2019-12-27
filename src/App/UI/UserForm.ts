import { User, UserDefinition } from "../User";
import { View } from "./View";

export class UserForm extends View<UserDefinition, User> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.setAge": this.onSetAgeClick,
      "click:.setName": this.onSetNameClick
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const nameText = this.parent.querySelector("input");

    if (nameText) {
      const name = nameText.value;

      this.model.set({ name });
    }
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get("name")}</div>
        <div>User age: ${this.model.get("age")}</div>
        <input />
        <button class="setName">Change Name</button>
        <button class="setAge">Set random age</button>
      </div>
    `;
  }
}
