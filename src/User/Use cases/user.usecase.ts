import { validate } from "validate.js"
import { errRes } from "../../helpers/tools"
import validator from "../../helpers/validate"
import createUser from "../User entity/user.entity"

export default function makeUserEndpointHandler ( databaseClient ) {
    return async function handle (requestBody) {
     
        



      async function createUserWithEmail (requestBody) {

        
        let notValid = validate(requestBody, validator.emailRegister())
        if(notValid) return errRes(notValid)

        //Getting a valid user model from our "entity" circle
        let userInfo =   createUser(requestBody)
        
        
        
        try {
         
        //Posting our valid entity to a database through a controller
        const result = await databaseClient.createdItem(userInfo)
        return result
        } catch (e) {
           throw e
        }
      }
    }