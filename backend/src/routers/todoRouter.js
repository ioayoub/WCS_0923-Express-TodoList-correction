const express = require("express");

const router = express.Router();

const {
  browse,
  // read,
  edit,
  add,
  remove,
} = require("../controllers/todoControllers");

const { checkIfInputIsEmpty } = require("../middlewares/todoValidation");

router.get("/", browse);

router.post("/", checkIfInputIsEmpty, add);

router.put("/:id", edit);
router.delete("/:id", remove);

module.exports = router;
