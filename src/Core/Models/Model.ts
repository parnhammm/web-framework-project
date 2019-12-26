import { IEventing } from "../Events/IEventing";
import { IRepositoryConnector } from "../Repository/IRepositoryConnector";
import { IModelAttributes } from "./Attributes/IModelAttributes";
import { AxiosResponse } from "axios";
import { IIdentifiable } from "../Repository/IIdentifiable";

export abstract class Model<T extends IIdentifiable> {
  constructor(
    private attributes: IModelAttributes<T>,
    private events: IEventing,
    private repository: IRepositoryConnector<T>
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T): void {
    this.attributes.set(update);

    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");
    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id");
    }

    this.repository.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.repository
      .save(this.attributes.all())
      .then((response: AxiosResponse): void => {
        this.trigger("saveCompleted");
      })
      .catch(() => {
        this.trigger("saveFailed");
      });
  }
}
