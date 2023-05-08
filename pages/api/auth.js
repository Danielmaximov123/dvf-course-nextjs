import { AddNewUser, getAllUsers, getUser } from "@/api-helpers/BL/usersBL"
import dbConnect from "@/utils/connectMongo";

const handler = async (req , res ) => {
    const { method , params , body } = req
    await dbConnect()

    if(method === "POST") {
        let data = await AddNewUser(body)
        res.send(data)
    }
}

export default handler