const checkIfInputIsEmpty = (req, res, next) => {
  const { task } = req.body;

  if (task !== "") {
    next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = { checkIfInputIsEmpty };
