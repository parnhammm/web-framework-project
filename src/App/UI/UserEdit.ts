import { View } from "./View";
import { UserDefinition, User } from "../User";
import { UserShow } from "./UserShow";
import { UserForm } from "./UserForm";

export class UserEdit extends View<UserDefinition, User> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: ".userShow",
      userForm: ".userForm"
    };
  }

  onRender(): void {
    const userShow = new UserShow(this.regions.userShow, this.model);
    userShow.render();

    const userForm = new UserForm(this.regions.userForm, this.model);
    userForm.render();
  }

  template(): string {
    return `
      <div>
        <div class="userShow"></div>
        <div class="userForm"></div>
      </div>
    `;
  }
}
