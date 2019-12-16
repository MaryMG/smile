const mongoose = require('mongoose');
const {Schema, model}   = mongoose;

const postSchema = new Schema(
  {
  title:{
    type: String 
  },
  description: {
    type: String
  },
  creatorID: {
    type: Schema.Types.ObjectId,
    ref:"User"  
  }
}, 
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


module.exports = model("Post", postSchema);
