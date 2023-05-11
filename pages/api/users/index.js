import { AddNewUser, getAllUsers, getUser } from "@/api-helpers/BL/usersBL";
import dbConnect from "@/utils/connectMongo";

const handler = async (req, res) => {
  const { method, params, body } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      // get All users
      let data = await getAllUsers();
      res.status(200).send(data);
      break;
    case "POST":
      // Add new User
      let newUser = await AddNewUser(body);
      res.status(200).send(newUser);
      break;
    default:
      res.status(400).json({ error: "Invalid request method" });
      break;
  }

};

export default handler;
