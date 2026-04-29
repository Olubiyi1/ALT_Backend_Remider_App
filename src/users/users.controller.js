import UserService from "./users.service.js";
import ResponseHandler from "../utils/responseHandler.js"

class UserController {
  static registerUser = async (req, res) => {
    try {
      const user = await UserService.registerUser(req.body);
      return ResponseHandler.success(res,"User registeration successful",user)
 
    } catch (err) {
      return ResponseHandler.badRequest(res,'error registering user',err)
    
    }
  };

  static loginUser = async (req, res) => {
    try {
      const user = await UserService.loginUser(req.body);
      return ResponseHandler.ok(res,"Login successful",user)
    } catch (err) {
    return ResponseHandler.badRequest(res,"user login failed")
    }
  };
}
export default UserController;