const router = require("express").Router();
const User = require("../models/User");

// register

router.post("/register", (req, res) => {
  console.log(req.body);

  // const user = await new User({
  //   userName: "jhon delhy",
  //   email: "ahmedmohamed@yakoo.com",
  //   password: "12333456",
  // });
  // await user.save();
  // res.send("ok");
  res.send("ok");
});

module.exports = router;
