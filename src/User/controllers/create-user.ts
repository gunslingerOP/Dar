import { errRes, okRes } from "../../helpers/tools";

export default function makeCreateUser(addUser) {
  return async function createUser(httpRequest) {
    try {
      const addedUser = await addUser(httpRequest.body);

      return okRes(addUser);
    } catch (error) {
      return errRes(error);
    }
  };
}
