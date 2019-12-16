const express = require("express");
const router = express.Router();
const catchErrors = require("../middlewares/catchErrors");
const {
  createPost,
  getPost,
  updatePost,
  deletePost
} = require("../controllers/post.controller");
/*
const {
  getTask,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/tasksController"); */

/* GET home page */
router.get("/", (req, res, next) => {
  res.send("Bienvenido a la api de Projectos de Ironhack");
});

function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' })
}

// Projects
router.get("/post", catchErrors(getPost));
//router.get("/post/:id", catchErrors(getPost));
router.post("/post", isAuth, catchErrors(createPost));
router.patch("/post/:id", catchErrors(updatePost));
router.delete("/post/:id", catchErrors(deletePost));

/* Tasks
router.get("/tasks/:id", catchErrors(getTask));
router.post("/tasks", catchErrors(createTask));
router.patch("/tasks/:id", catchErrors(updateTask));
router.delete("/tasks/:id", catchErrors(deleteTask));
*/

module.exports = router;