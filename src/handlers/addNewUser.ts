import {insert} from  "../repository/user.ts"


export async function addUser ({response,request}:any){
    const req = await request.body()
    const user = await req.value
    try {
        if(!user.hasOwnProperty("name") && !user.hasOwnProperty("country")){
            throw {message:"Invalid Request"};
        }
        
        response.status = 200
        response.body =  await insert(user)
    } catch (error) {
        response.body = error
        response.status = 400
    }

}