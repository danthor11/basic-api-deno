import {search} from  "../repository/user.ts"
import findMyId from "../libs/userExits.ts"

export async function getUser ({request,response,params} : any){

    const userExists = await findMyId(params.id)
    
    if(userExists){

        const user = await search({id:params.id})
        if(user.rows){
            console.log(user.rows)
            response.status = 200
            response.body = user.rows
        }
        else{
            response.status = 404
            response.body = { message : "User not found"}
        }
    }
    
    response.body = "Single user"

}