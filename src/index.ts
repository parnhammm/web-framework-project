import { User } from "./Models/User";

const user = new User({ name: "Andrew", age: 26 });

user.set({ name: "Trevor", age: 999 });

console.log("Name: " + user.get("name"));
console.log("Age: " + user.get("age"));
