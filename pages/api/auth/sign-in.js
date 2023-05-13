import { signInAuth } from "@/api-helpers/BL/authBL";
import dbConnect from "@/utils/connectMongo";

const handler = async (req, res) => {
  const { method, body } = req;
  await dbConnect();
  switch (method) {
    case "POST":
      let data = await signInAuth(body);
      if(data.success) {
        res.status(200).send(data);
      } else {
        res.status(400).send(data);
      }
      break;
    default:
      res.status(400).json({ error: "Invalid request method" });
      break;
  }
};

export default handler;
