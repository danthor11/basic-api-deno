import client from "../db.ts";

interface Params{
    id:string | number
}

export async function search(params ?: Params) {
  if (params?.id) {
    return await client.execute("SELECT * from user WHERE id = ?",[params.id]);
  }
  return await client.execute("SELECT * from user");
}

interface InsertParams {
  name: string;
  country: string;
}

export async function insert({ name, country }: InsertParams) {
  return await client.execute("INSERT INTO user(name,country) values(?,?)", [
    name,
    country,
  ]);
}

export async function remove(id: string) {
  return await client.execute("DELETE FROM user WHERE id = ?", [id])
}

interface UpdateParams{
    name: string,
    country: string,
    id: number
}

export async function update(name : string,country : string,id : string) {
    return await client.execute("UPDATE user SET name = ? , country = ?  WHERE id = ?",[
        name,
        country,
        id
    ])
}

