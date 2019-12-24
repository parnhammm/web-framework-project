import { Eventing } from "./Core/Events/Eventing";
import {AxiosRepositoryConnector } from "./AxiosRepositoryConnector";

export interface UserDefinition {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User {
  public events: Eventing = new Eventing();
  public connector: AxiosRepositoryConnector<UserDefinition> = new AxiosRepositoryConnector<UserDefinition>(rootUrl);

  constructor(private data: UserDefinition) {}

  public get(property: string): string | number {
    return this.data[property];
  }

  public set(update: UserDefinition): void {
    Object.assign(this.data, update);
  }
}
