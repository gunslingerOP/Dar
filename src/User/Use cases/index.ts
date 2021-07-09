import makeUserEndpointHandler from "./user.usecase";

import databaseActions from "../../db/index";

let addUser = makeUserEndpointHandler(databaseActions);

export { addUser };
