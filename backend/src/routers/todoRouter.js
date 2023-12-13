const express = require("express");

const router = express.Router();

const {
  browse,
  // read,
  edit,
  add,
  remove,
} = require("../controllers/todoControllers");

router.get("/", browse);
router.post("/", add);
router.put("/:id", edit);
router.delete("/:id", remove);

module.exports = router;
