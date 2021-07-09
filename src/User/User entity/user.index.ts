export default function makeCreateUser() {
  return function createUser({
    name,
    email,
    password,

    status,

    googleId,
    googleEmail,
    googleVerified,
    googlePicture,
  }) {

    if(!googleId&&!email){
        return new Error("No email, phone or auth ids provided!")
    }


if(googleId){

}


if(email){

}


  };
}
