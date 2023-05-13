import { AddNewUser } from "@/api-helpers/BL/usersBL";
import dbConnect from "@/utils/connectMongo";

const handler = async (req, res) => {
  const { method, body } = req;
  await dbConnect();
  switch (method) {
    case "POST":
        const {user , invitation} = body
      let resp = await AddNewUser(user , invitation);
      if(resp.success) {
        res.status(200).send(resp);
      } else {
        res.status(400).send(resp);
      }
      break;
    default:
      res.status(400).json({ error: "Invalid request method" });
      break;
  }
};

export default handler;