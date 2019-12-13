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
  pacienteID:{
    type: Schema.Types.ObjectId,
    required: true
  },
}, 
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


module.exports = model("Pacientes", pacientesSchema);