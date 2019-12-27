import { User, UserDefinition } from "../User";
import { View } from "./View";

export class UserForm extends View<UserDefinition, User> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.setAge": this.onSetAgeClick,
      "click:.setName": this.onSetNameClick,
      "click:.saveModel": this.onSaveClick
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

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
        <input placeholder="${this.model.get("name")}" />
        <button class="setName">Change Name</button>
        <button class="setAge">Set random age</button>
        <button class="saveModel">Save User</button>
      </div>
    `;
  }
}
