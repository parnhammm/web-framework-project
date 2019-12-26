import { Eventing } from "../Events/Eventing";
import Axios, { AxiosResponse } from "axios";
import { Model } from "./Model";

export class Collection<T extends Model<D>, D> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: D) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    Axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: D) => {
        const model = this.deserialize(value);
        this.models.push(model);
      });

      this.trigger("change");
    });
  }
}
