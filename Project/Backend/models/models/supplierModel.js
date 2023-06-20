//supplierModel 

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const supplierSchema = mongoose.Schema({
   company_name: {
      type: String,
      required: [true, "Please add the company name"]
   },

   first_name: {
      type: String,
      required: [true, "Please add a first name"]
   },

   last_name: {
      type: String,
      required: [true, "Please add a last name"]
   },

   email: {
      type: String,
      required: [true, "Please add your email"],
      unique: true,
      trim: true,
      match: [
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         "Please enter a valid email"
      ]
   },

   mobile: {
      type: String,
      required: [true, "Please add your phone no"],
      default: "+94"
   },

   company_address: {
      type: String,
      required: [true, "Please add the company address"],
   },

   password: {
      type: String,
      required: [true, "please add a password"],
      minLength: [6, "Password must be up to 6 characters"],
      maxLength: [23, "Password must not be more than 23 characters"],
   },

   bio: {
      type: String,
      maxLength: [250, "Bio must not be more than 250 characters"],
      default: "bio",
    },

   photo: {
      type: String,
      required: [true, "please add a photo"],
      default: "https://i.ibb.co/4pDNDk1/avatar.png"
   }

}, {
   timestamps: true,
}
);


//Encrypt password before saving to DB
supplierSchema.pre("save", async function (next) {
   if (!this.isModified("password")) {
      return next();
   }


   //Hash password
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(this.password, salt);
   this.password = hashedPassword;
   next();
})

const Supplier = mongoose.model("Supplier", supplierSchema)
module.exports = Supplier  