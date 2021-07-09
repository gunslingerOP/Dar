import { addUser } from "../Use cases";
import makeCreateUser from "./create-user";

const createUser = makeCreateUser(addUser);

const userController = Object.freeze({ createUser });

export default userController;
