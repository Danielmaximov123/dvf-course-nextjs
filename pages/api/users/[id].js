import { getUser } from "@/api-helpers/BL/usersBL"
import dbConnect from "@/utils/connectMongo";

const handler = async (req , res ) => {
    const { method , query , body } = req

    await dbConnect()

    // get User By ID
    if(method === "GET") {
        let data = await getUser(query.id)
        res.send(data)
    }
}

export default handler