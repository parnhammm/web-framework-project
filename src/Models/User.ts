import { Eventing } from "./Core/Events/Eventing";
import { AxiosRepositoryConnector } from "./AxiosRepositoryConnector";
import { Attributes } from "./Core/Attributes";
import { AxiosResponse } from "axios";

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

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: UserDefinition): void {
    this.attributes.set(update);

    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");
    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id");
    }

    this.connector.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.connector
      .save(this.attributes.all())
      .then((response: AxiosResponse): void => {
        this.trigger("saveCompleted");
      })
      .catch(() => {
        this.trigger("saveFailed");
      });
  }
}
