import mongoose from "mongoose";

const InvitationSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, 
        default: mongoose.Types.ObjectId 
    }
},{
    timestamps : true
});

export default mongoose.models.Invitation || mongoose.model("Invitation", InvitationSchema);
