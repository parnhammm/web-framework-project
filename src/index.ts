import { UserForm } from "./App/UI/UserForm";
import {User } from './App/User';

const user = User.buildUser({name: "Andrew", age: 26});

const userForm = new UserForm(document.getElementById("root"), user);
userForm.render();
