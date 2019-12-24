import { Eventing } from "./Core/Events/Eventing";
import { AxiosRepositoryConnector } from "./AxiosRepositoryConnector";
import { Attributes } from "./Core/Attributes";

export interface UserDefinition {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User {
  private events: Eventing;
  private connector: AxiosRepositoryConnector<UserDefinition>;
  private attributes: Attributes<UserDefinition>;

  constructor(data: UserDefinition) {
    this.attributes = new Attributes<UserDefinition>(data);
    this.connector = new AxiosRepositoryConnector<UserDefinition>(rootUrl);
    this.events = new Eventing();
  }

  
}
