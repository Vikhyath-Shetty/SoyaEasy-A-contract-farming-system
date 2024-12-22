const mongoose = require("mongoose");

const contractSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    state: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: [true, "please enter the title"],
    },
    crop_type: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: Array,
      required: true,
    },
    timeline: {
      landprep: {
        type: String,
        required: true,
      },
      sowing: {
        type: String,
        required: true,
      },
      cultivation: {
        type: String,
        required: true,
      },
      harvest: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contract", contractSchema);
