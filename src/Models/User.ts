interface UserProps {
  name: string;
  age: number;
}

export class User {
  constructor(private data: UserProps) {}

  public get(property: string): (string | number) {
    return this.data[property];
  }
}
