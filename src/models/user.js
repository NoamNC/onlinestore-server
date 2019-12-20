const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20
    },
    email: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 65
    },
    phone: {
      type: String,
      required: true,
      minlength: 9,
      maxlength: 13
    },
    password: {
      type: String,
      required: true,
      minlength: 9,
      maxlength: 16
    },

    isAdmin: {
      type: Boolean
    },
    image: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        return ret;
      }
    }
  }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
