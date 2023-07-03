const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  lesson: {
    type: Number,
  },
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  description: {
    type: String,
  },
  bullets: {
    type: [String],
  },
  file: {
    type: String,
  },
  fileMac : {
    type : String
  }
});

export default mongoose.models.Lesson || mongoose.model("Lesson", lessonSchema);
