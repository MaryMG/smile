const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
  username:{
    type: String,
    required: true
  },
  email:{
    type:String,
    unique: true, 
    trim: true,
    lowercase: true 
  },
  phone: {
    type: Number
  },
  cedula:{
    type: String,
    unique: true
  },
  photoURL: {
    type: String,
    default: "https://image.flaticon.com/icons/svg/1913/1913415.svg"
  },
  age:{
    type: Number
  },
  role: {
    type: String,
    enum: ["Paciente", "Doctor"],
    default:"Paciente"
  },
  especialidad:{
    type: String,
    enum: ["Terapeuta", "Psicologo", "Psiquiatra"]
  },
  problemas:{
    type: String,
    enum:["Estres","Depresión","Ansiedad"]
  },
  sintomas:{
     type: String,
     enum: ["Taquicardia",
      "Palpitación lenta",
      "Suduración en manos",
      "Temblor en el cuerpo",
      "Desmayos",
      "Aumento de apetito",
      "Insomnio",
      "Dolor de cabeza",
      "Dolor corporal",
      "Perdida de cabello",
      "Poco apetito",
      "Consumo de Alcohol o cigarro",
      "Mucho sueño",
      "Perdida de interes en actividades favoritas",
      "Aislamiento",
      "Perdida del apetito"
    ]
  } 
}, 
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

userSchema.plugin(PLM, { usernameField: 'email' })
module.exports = model("User", userSchema);
