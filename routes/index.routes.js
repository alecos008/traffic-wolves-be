const router = require("express").Router();
const User = require("../models/User.model");
const registrationRoutes = require("./registration.routes");

/* router.get("/", (req, res, next) => {
  res.json("All good in here");
}); */

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

router.use("/registration", registrationRoutes);

module.exports = router;
