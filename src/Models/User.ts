import { Model } from "../Core/Models/Model";
import { IIdentifiable } from "../Core/Repository/IIdentifiable";
import { ModelAttributes } from "../Core/Models/Attributes/ModelAttributes";
import { AxiosRepositoryConnector } from "./AxiosRepositoryConnector";
import { Eventing } from "../Core/Events/Eventing";

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
}
