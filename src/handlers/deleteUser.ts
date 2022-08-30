import {remove} from  "../repository/user.ts"
import findMyId from "../libs/userExits.ts"

export async function deleteUser ({params,response} : any){
    const userExists = await findMyId(params.id)
    if(userExists){
        response.status =200
        response.body = await remove(params.id)

    }
    else{
        response.status = 404
        response.body = {message: "Message Not FOund"}
    }

}