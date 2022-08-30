import { update } from "../repository/user.ts"
import doesUserExists from "../libs/userExits.ts"

export async function updateUser ({request,params,response} : any){
    const userExists = await doesUserExists(params.id)

    if(userExists){
        const body = request.body()
        const user = await body.value
        
        response.status = 200
        response.body = await update(user.name,user.country,params.id)
    }
    else{
        response.status= 404
        response.body = {message: "user not found"}
    }


}