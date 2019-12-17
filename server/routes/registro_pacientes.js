const express = require("express");
const router = express.Router();
const catchErrors = require("../middlewares/catchErrors");
const {
  createPaciente,
  getPaciente,
  updatePaciente,
  deletePaciente
} = require("../controllers/registropacientes.controller");


/* GET home page */
router.get("/", (req, res, next) => {
  res.send("");
});

function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' })
}

// Projects
router.get("/paciente", catchErrors(getPaciente));
//router.get("/post/:id", catchErrors(getPost));
router.post("/paciente", isAuth, catchErrors(createPaciente));
router.patch("/paciente/:id", catchErrors(updatePaciente));
router.delete("/paciente/:id", catchErrors(deletePaciente));



module.exports = router;