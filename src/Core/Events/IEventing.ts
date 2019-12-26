import { EventCallback } from "./TEventCallback";

export interface IEventing {
  on(eventName: string, callback: EventCallback): void;

  trigger(eventName: string): void;
}
