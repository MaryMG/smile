const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const pacientesSchema = new Schema(
  {
  title:{
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  name:{
    type:String,
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


module.exports = model("Pacientes", pacientesSchema);