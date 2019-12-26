import { Model } from "./Core/Models/Model";
import { IIdentifiable } from "./Core/Repository/IIdentifiable";
import { ModelAttributes } from "./Core/Models/Attributes/ModelAttributes";
import { AxiosRepositoryConnector } from "./AxiosRepositoryConnector";
import { Eventing } from "./Core/Events/Eventing";
import { Collection } from "./Core/Models/Collection";

export interface UserDefinition extends IIdentifiable {
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserDefinition> {
  static buildUser(attributes: UserDefinition): User {
    return new User(
      new ModelAttributes(attributes),
      new Eventing(),
      new AxiosRepositoryConnector<UserDefinition>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserDefinition> {
    return new Collection<User, UserDefinition>(
      rootUrl,
      (json: UserDefinition) => {
        return User.buildUser(json);
      }
    );
  }
}
