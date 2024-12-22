const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  contract_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "contract",
  },
  username:{
    type:String,
    required:true,
  },
  land:{
    type:Number,
    required:true,
  },
  experience:{
    type:String,
    required:true,
  },
  information:{
    type:String,
    required:true,
  }
},
{
  timestamps:true,
});

module.exports = mongoose.model("application",applicationSchema);
