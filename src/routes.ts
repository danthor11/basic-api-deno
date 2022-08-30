import { Router } from "https://deno.land/x/oak/mod.ts";

import { addUser ,deleteUser ,getAllUsers ,updateUser , helloWorld, getUser}  from "./handlers/index.ts"
const router = new Router()


router
    .get("/",helloWorld)
    .get("/users",getAllUsers)
    .get("/users/:id",getUser)
    .post("/users" , addUser)
    .put("/users/:id",updateUser)
    .delete("/users/:id",deleteUser)

export default router