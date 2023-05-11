import { getInvitation, removeInvitation } from "@/api-helpers/BL/InvitationBL";
import dbConnect from "@/utils/connectMongo";

const handler = async (req, res) => {
  const { method, query, body } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      // get by id
      let data = await getInvitation(query.id);
      res.send(data);
      break;
      case "DELETE":
        // delete by id
      let deleteData = await removeInvitation(query.id);
      res.send(deleteData);
      break;
    default:
      res.status(400).json({ error: "Invalid request method" });
      break;
  }
};

export default handler;
