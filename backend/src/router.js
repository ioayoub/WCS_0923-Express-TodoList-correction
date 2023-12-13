const express = require("express");

const router = express.Router();

const todoRouter = require("./routers/todoRouter");

router.use("/todos", todoRouter);

module.exports = router;
