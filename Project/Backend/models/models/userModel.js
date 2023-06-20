const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userScheme = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "Please add a  first name"],
    },
    last_name: {
      type: String,
      required: [true, "Please add a last name"],
    },
    address: {
      type: String,
      required: [true, "Please add the address"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please Add A Password"],
      minLength: [6, "Password Must be up to 6 characters"],
      // maxLength:[23 , "Password must not  be more than 23 characters"]
    },
    photo: {
      type: String,
      required: [true, "Please add a photo"],
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdudeproducts.com%2Fblogs%2Fdude-blog%2Fgiga-chad-meme&psig=AOvVaw2y9yDqQvEZEJ-a43-CHCu9&ust=1676136900717000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDWq-a-i_0CFQAAAAAdAAAAABAD",
    },
    phone: {
      type: String,
      default: "+94",
    },

    bio: {
      type: String,
      maxLength: [250, "Bio must not be more than 250 charatcers"],
      default: "Bio",
    },
    date_of_birth: {
      type: Date,
      required: [true, "Please add the date of birth"],
    },
    nic: {
      type: String,
      required: [true, "Please add a national ID number"],
      minLength: [6, "Password Must be up to 6 characters"],
      unique: true,
    },

    // Restricting
    isRestricted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//Encrypt password before saving to DB

userScheme.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
});

const User = mongoose.model("User", userScheme);
module.exports = User;
