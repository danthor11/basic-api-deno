import client from "../db.ts"


async function  findMyId(id: number | string) : Promise<boolean> {
    const result = await client.query("SELECT COUNT(*) count FROM user WHERE id = ? ",[id])

    return result[0].count > 0
    
}

export default findMyId