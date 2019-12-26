import { EventCallback } from "./TEventCallback";
import { IEventing } from "./IEventing";

export class Eventing implements IEventing {
  private events: { [eventName: string]: EventCallback[] } = {};

  public on = (eventName: string, callback: EventCallback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);

    this.events[eventName] = handlers;
  };

  public trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  };
}
