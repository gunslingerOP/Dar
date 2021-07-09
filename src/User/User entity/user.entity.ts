import { errRes } from "../../helpers/tools";

export default function createUser({
  name,
  email,
  password,
  number,
  facebookId,
  facebookEmail,
  facebookName,
  facebookPicture,
}) {
  let userEntityObject = {
    name,
    status: "active",

    email,
    password,

    number,

    facebookId,
    facebookEmail,
    facebookName,
    facebookPicture,
  };

  if (!facebookId && !email && !number)
    throw "No email, phone or Oauth provided!";

  if (facebookId || facebookName || facebookPicture || facebookEmail) {
    if (!facebookId || !facebookName || !facebookPicture || !facebookEmail)
      throw "Invalid Oauth details";
  }

  if (!name) throw "Provide a name";

  if (email && !password) throw "Provide a password with the email";

  return Object.freeze(userEntityObject);
}
