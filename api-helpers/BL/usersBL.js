import UserSchema from '../models/userModel';

export const getAllUsers = async () => {
    const users = await UserSchema.find();
    return users;
}

export const getUser = async (id) => {
    const user = await UserSchema.findById(id);
    return user;
}

export const updateUser = async (id , data) => {
    const user = await UserSchema.findByIdAndUpdate(id , data);
    return user;
}

export const deleteUser = async (id) => {
    const user = await UserSchema.findByIdAndDelete(id);
    return user;
}

export const hashPassword = async () => {

}

export const AddNewUser = async (user) => {
    const userEmail = await UserSchema.findOne({email : user.email})
    const userPhone = await UserSchema.findOne({phoneNumber : user.phoneNumber})

    if(userEmail && userPhone) {
        return {success : false , message : 'דוא"ל ומספר טלפון זה כבר קיימים...'}
    } else if(userEmail || userPhone) {
        return userEmail ? {success : false , message : 'האימייל הזה כבר קיים...'} : userPhone ? {success : false , message : 'מספר הטלפון הזה כבר קיים...'} : null
    } else {
        const newUser = new UserSchema(user);
        const savedUser = await newUser.save();
    return { success : true , savedUser };
    }
}
