import { Schema, model } from "mongoose";

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // address: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    // age: {
    //   type: Number,
    //   required: true,
    //   trim: true,
    // },

    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
