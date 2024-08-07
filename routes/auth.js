const router = require("express").Router();
const User = require("../models/User");

// register

router.get("/register", async (req, res) => {
  const user = await new User({
    username: "jhon",
    email: "ahmed @yakoo.com",
    password: "123456",
  });
  await user.save();
  res.send("ok");
});

module.exports = router;
