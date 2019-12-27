import { CollectionView } from "./CollectionView";
import { User, UserDefinition } from "../User";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserDefinition> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
