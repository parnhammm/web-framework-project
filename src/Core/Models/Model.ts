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

  /*
    Note: we can only do this shortened syntax when we are using the ES2015 syntax for assigning
    values in the constructor as arguments. If we used a property on the class, and use this.property = property
    syntax, the outputed javascript would **not** work. 

    The outputted js would be something like:

    var Model = (function() {
      var Model() {
        this.on = this.events.on;
        this.events = events;
      }
    })

    which would reference an undefined property!
  */
  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

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
