import { createContext, Dispatch } from "react";

 type User={
    _name?:string,
    _familyname?:string,
    _email?:string,
    _password?:string,
    _address?:string,
    _phone?:string
}
export type UserAction =
 { type:"POST"|"UPDATE"|"DELETE" ; field:User }
 export const initialState: User = {
    _name: '',
    _familyname: '',
    _email: '',
    _password: '',
    _address: '',
    _phone: ''
}; 
 function UserReducer(state:User,op:UserAction)
{
   switch (op.type) {
    case "POST":
        
        return{...op.field}
        case "UPDATE":
            console.log("user",state);
            
            return{...state,...op.field}
        
        case "DELETE":
            return initialState
    default:
        return state
   }
}
export { UserReducer }
export type { User }
export const userCotext = createContext<[User, Dispatch<UserAction>]>([{} as User, () => { }]);