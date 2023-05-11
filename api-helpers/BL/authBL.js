import UserSchema from '../models/userModel';
import jwt from 'jsonwebtoken'

export const updatePassword = async (id , password) => {
    const user = await UserSchema.findById(id)
    const isSamePassword = await user?.comparePassword(password)
    if( isSamePassword ) {
        return {success : false , message : 'הסיסמה החדשה חייבת להיות שונה'}
    } 
    if(password.trim().length < 8 ||  password.trim().length > 36) {
        return {success : false , message : 'הסיסמה חייבת להיות באורך 8 עד 36 תווים...'}
    } else {
        user.password = password.trim()
        await user.save()
        return {success : true , message : 'הסיסמה שונתה בהצלחה !'}
    }
}

export const signInAuth = async (data) => {
    if (!data.email.trim() || !data.password.trim()) {
        return ({ success: false, message: 'דוא"ל/סיסמא חסרים...' });
      }
      const user = await UserSchema.findOne({ email: data.email });
      if (!user) {
        return ({ success: false, message: "המשתמש לא נמצא" });
      }
      const isMatched = await user.comparePassword(data.password);
      if (!isMatched) {
        return ({ success: false, message: 'דוא"ל/סיסמה לא נכונים...' });
      } else {
        const JWT_SECRET = "FRKLMKLGDHLQWLMERGEFGHRGWSGDRG";
        const token = jwt.sign(
          {
            _id : user._id,
            fName: user.fName,
            lName: user.lName,
            phoneNumber: user.phoneNumber,
            email: user.email,
            admin: user.admin,
          },
          JWT_SECRET , 
          {
            expiresIn : '3h'
          }
        );
        return ({ success: true, token });
      }
}