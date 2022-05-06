const router = require("express").Router();
const User = require("../models/User.model");

router.post("/new-user", (req, res, next) => {
  const { name, email, number } = req.body;

  User.create({ name, email, number })
    .then((newUser) => {
      console.log(newUser);
      res.status(200).json({ user: newUser });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
