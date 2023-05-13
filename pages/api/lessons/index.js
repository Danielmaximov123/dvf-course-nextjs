import dbConnect from "@/utils/connectMongo";
import lessonSchema from '../../../api-helpers/models/LessonsModel';

const handler = async (req, res) => {
  const { method, params, body } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      // get All lessons
      try {
        const lessons = await lessonSchema.find();
        res.status(200).json(lessons);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
      break;
    default:
      res.status(400).json({ error: "Invalid request method" });
      break;
  }
};

export default handler;
