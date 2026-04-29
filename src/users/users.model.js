import mongoose,{Schema,model} from "mongoose";

const userSchema = new Schema({
    userName:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    DOB:{
        type: Date,
        required: true
    },
    notified:{
        type:Boolean,
        default : false
    }
},
{timestamps:true})

const User = model("User",userSchema)
export default User