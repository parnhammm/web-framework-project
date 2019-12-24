import { User } from "./Models/User";

const user = new User({ name: "Andrew", age: 26 });

console.log("Name: " + user.get("name"));
