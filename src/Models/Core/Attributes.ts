export class Attributes<T> {
  constructor(private data: T) {}

  // This syntax is a bit narly... lets break it down:
  // <K extends keyof T> is setting up a generic type that is constrainted to the key values of T
  // So if T is {name: 'abc', age: 99}, then K can only be name or age.
  // Because K can only be name or age, this means this function can only be called for a key on the generic T
  // Meaning that it makes it impossible to try to call this function with xyz on the above object
  // The T[K] part means that given a type {name: string, age: number}, it will return the
  // correct type. So if we called this with name, we would get a string as our type. If we used age, number etc.
  public get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  public set(update: T): void {
    Object.assign(this.data, update);
  }
}

//Test code to try out the Attributes above

// import { UserDefinition } from "../User";

// const attrs = new Attributes<UserDefinition>({
//   id: 5,
//   age: 20,
//   name: "Andrew"
// });

// const name = attrs.get('name'); //Hover over and the type is string!
// const age = attrs.get('age'); //Hover over and type is number!
// const somethingRandom = attrs.get('random'); //Not allowed
