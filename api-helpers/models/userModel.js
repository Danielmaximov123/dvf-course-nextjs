import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
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
        default: null,
    },
    admin : {
        type : Boolean,
        default : false
    }
});

UserSchema.pre('save' , async function (next)  {
    const user = this;
    if(user.isModified('password')) {
        const hash = await bcrypt.hash(user.password, 8);
        user.password = hash
    }
    next()
})

UserSchema.methods.comparePassword = async function (password)  {
    const result = await bcrypt.compareSync(password, this.password)
    return result
}


export default mongoose.models.users || mongoose.model("users", UserSchema)
