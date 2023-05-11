import mongoose from 'mongoose';
import InvitationSchema from '../models/InvitationModel';

export const getAllInvitation = async () => {
        let data = await InvitationSchema.find({})
        if(data.length > 0) {
            return data;
        } else {
            return "אין הזמנות !"
        }
}

export const getInvitation = async (id) => {
        let data = await InvitationSchema.findById(id)
        if(data !== null) {
            return { success : true , message : "קיימת הזמנה" }
        } else {
            return { success : false , message : "לא נמצא הזמנה קיימת" }
        }
}

export const createInvitation = async () => {
    const newInvitation = new InvitationSchema({
      _id: new mongoose.Types.ObjectId(),
    });
    const savedInvitation = await newInvitation.save();
    return savedInvitation;
  };
  
export const removeInvitation = async (id) => {
        let data = await InvitationSchema.findByIdAndDelete(id);
        if(data) {
            return { success : true , message : "הזמנה נמחקה" }
        } else {
            return { success : false , message : "לא נמצאה הזמנה" }
        }
}