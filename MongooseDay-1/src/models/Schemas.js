const { Schema, model } = require("mongoose");


// user's Schema
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    gender: { type: String, enum: ["male", "female", "others"] },
    city: { type: String },
  },
  { versionKey: false }
);



// userModel
const userModel = model("users", userSchema);


module.exports = userModel

