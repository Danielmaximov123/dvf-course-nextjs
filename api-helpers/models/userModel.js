import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    fName: {
        type: String,
        default : null
    },
    lName: {
        type: String,
        default : null
    },
    password: {
        type: String,
        required: true,
    },
    admin : {
        type : Boolean,
        default : false
    }
});


export default mongoose.models.users || mongoose.model("users", UserSchema)
