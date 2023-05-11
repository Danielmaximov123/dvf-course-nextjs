import { createInvitation, getAllInvitation } from "@/api-helpers/BL/InvitationBL";
import dbConnect from "@/utils/connectMongo";

const handler = async (req, res) => {
  const { method, query, body } = req;
  await dbConnect();
  if(method === "GET") {
    const invitations = await getAllInvitation();
    res.send(invitations)
  }
  if(method === "POST") {
      let data = await createInvitation();
      res.send(data);
  }
};

export default handler;
