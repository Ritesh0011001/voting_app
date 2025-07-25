const mongoose= require('mongoose')
//const bcrypt  = require('bcrypt')

//define the person schema

const userSchema= new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  email:{
    type:String,
  },
  address:{
    type:String,
    required:true
  },
  aadharCardNumber:{
    type:Number,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  role:{
    type:String,
    enum:['voter','admin'],
    default:'voter'
  },
  isVoted :{
    type:Boolean,
    default:false
  }

  
})


const User = mongoose.model('user', userSchema)

module.export=User