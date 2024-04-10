const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      trim: true,
      enum: ['Entertainment', 'Technology', 'Sports', 'Business', 'Health', 'Science'],
    },

    title: {
      type: String,
      trim: true,
    },

    blogger_name: {
      type: String,
      trim: true,
    },

    image: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Form = mongoose.model("Form", FormSchema);
module.exports = Form;
