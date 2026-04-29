import User from "./users.model.js";

class UserService {
  static registerUser = async (userData) => {
    const { userName, email, DOB } = userData;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("Email already exists");
    }
    return await User.create({ userName, email, DOB });
  };

  static loginUser = async(userData)=>{

    const {email} = userData
    const user = await User.findOne({email})
    if(!user){
        throw new Error("Invalid email")
    }
    return user
  }
}
export default UserService