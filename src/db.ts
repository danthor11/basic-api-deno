import { Client } from "https://deno.land/x/mysql/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const {DB_HOSTNAME,DB_USERNAME,DB_NAME,DB_PASSWORD} = config()

const client = await new Client().connect({
    hostname: DB_HOSTNAME,
    username: DB_USERNAME,
    db:DB_NAME,
    password:DB_PASSWORD
})

export default client