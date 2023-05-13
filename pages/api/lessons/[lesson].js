import lessonSchema from '../../../api-helpers/models/LessonsModel';
import dbConnect from "@/utils/connectMongo";

const handler = async (req , res ) => {
    const { method , query , body } = req

    await dbConnect()
    
    switch (method) {
        case "GET":
          // get user by id
          let lesson = await lessonSchema.findOne({lesson : query.lesson})
          res.send(lesson)
          break;
        default:
          res.status(400).json({ error: "Invalid request method" });
          break;
      }
}

export default handler