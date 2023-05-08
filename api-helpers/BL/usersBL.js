
import UserSchema from '../models/userModel';

export const getAllUsers = async () => {
    const users = await UserSchema.find();
    return users;
}

export const getUser = async (id) => {
    const user = await UserSchema.findById(id);
    return user;
}

export const AddNewUser = async (user) => {
    const newUser = new UserSchema(user);
      const savedUser = await newUser.save();
    return savedUser;
}