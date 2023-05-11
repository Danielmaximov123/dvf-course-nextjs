import { deleteUser, getUser, updateUser } from "@/api-helpers/BL/usersBL"
import dbConnect from "@/utils/connectMongo";

const handler = async (req , res ) => {
    const { method , query , body } = req

    await dbConnect()
    
    switch (method) {
        case "GET":
          // get user by id
          let user = await getUser(query.id)
          res.send(user)
          break;
        case "PUT":
          // get user by id
          let update = await updateUser(query.id , body)
          res.send(update)
          break;
        case "DELETE":
          // delete user by id
          await deleteUser(query.id)
          res.send("user deleted")
          break;
        default:
          res.status(400).json({ error: "Invalid request method" });
          break;
      }
}

export default handler