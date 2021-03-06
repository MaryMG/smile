const Pacientes = require ('../models/Pacientes')

exports.getPaciente = async (req, res) => {
  const { docId } = req.body
  const paciente = await Pacientes.find({creatorID:docId}).populate("tasks");
  res.status(201).json({ paciente });
};

exports.createPaciente = async (req, res) => {
  
  const { title, description, name } = req.body
  const { _id } = req.user;

  const paciente = await Pacientes.create({
    title,
    description,
    name,
    creatorID: _id
  })
  const populatedPaciente = await Pacientes.findById(paciente._id).populate('creatorID')
  res.status(201).json(populatedPaciente)
};

exports.updatePaciente = async (req, res) => {
  const { title, description, name } = req.body;
  const { id } = req.params;
  const paciente = Pacientes.findByIdAndUpdate(id, { title, description, name });
  res.status(200).json(paciente);
};

exports.deletePaciente = async (req, res) => {
  const { id } = req.params;
  await Pacientes.findByIdAndDelete(id);
  res.status(200).json({ message: "deleted" });
};