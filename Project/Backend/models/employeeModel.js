const mongoose = require("mongoose")
const bcrypt = require('bcryptjs');


const employeeSchema = mongoose.Schema({

   first_name : {
        type: String,
        required : [true, "Please add a  first name"]
    },
    last_name : {
        type: String,
        required : [true, "Please add a last name"]
    },
    address:{
           type : String,
           required :  [true, "Please add the address"]
    },
    mobile : {
        type : String,
        required :  [true, "Please add the  mobile nummber"],
        default : "+94"
    },
    designation :{
        type : String,
        required :  [true, "Please enter employee designation"]
    },
    email : {
        type: String,
        required : [true, "Please add an email"],
        unique: true,
        trim : true,
        match : [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email"
        ]
    },
    password : {
        type: String,
        required : [true, "Please add a password"],
        minLenght:[6, "password must contain minimum 6 characters"],
        //maxLength:[8, "paasword not be exceeding 8 characters"]
    },
    profile_pic : {
        type : Object,
        default: {},
    },
    date:{
        type: String, // mm/dd/yy
        required: [true, "please enter the joined date"]
        
    },
    empID: {
        type:String,
        required : true,
        default : function(){
            return "E" + Math.floor(1000 + Math.random() * 9000);
        },
        trim:true
    }
}, {
    timestamps: true
});
//encrypt the password before savinng to DB
  employeeSchema.pre("save", async function(next){
       if(!this.isModified("password")){
              return next()
       }


    //Haash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword
    next()
  })

const Employee = mongoose.model("Employee", employeeSchema)
module.exports = Employee