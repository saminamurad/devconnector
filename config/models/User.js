const mongoose=require('mongoose')

const UserScheme =new mongoose.Schema({
    name:{
        type: string,
        require:true
    },
    email:{
        type:string,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:string
    },
    date:{
        type:Date,
        default:Date.now

    }
});
module.exports=User= mongoose.model('user,UserSchema')