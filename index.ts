
import { Application } from "https://deno.land/x/oak/mod.ts"
import routes from "./src/routes.ts"


const app = new Application()

app.use(routes.routes())

app.listen({port:3000})
