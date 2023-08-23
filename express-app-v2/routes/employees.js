var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.json([
    {
      id: 1,
      name: "Kevin",
      phone: "123245678",
      email: "j@k.com"
    },
    {
      id: 1,
      name: "Peter",
      phone: "45678909",
      email: "s@t.com"
    }
  ]);
});

module.exports = router;
