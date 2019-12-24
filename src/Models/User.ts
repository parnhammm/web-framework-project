interface UserProps {
  name?: string;
  age?: number;
}

type EventCallback = () => void;

export class User {
  private events: { [eventName: string]: EventCallback[] } = {};

  constructor(private data: UserProps) {}

  public get(property: string): string | number {
    return this.data[property];
  }

  public set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  public on(eventName: string, callback: EventCallback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);

    this.events[eventName] = handlers;
  }

  public trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  }
}
