var express = require("express");
var router = express.Router();

/* GET Fizz Buzz. */
router.get("/", function (req, res, next) {
  let n = req.query.n;
  if (n % 15 === 0) {
    res.send("Fizz Buzz");
  } else if (n % 3 === 0) {
    res.send("Fizz");
  } else if (n % 5 === 0) {
    res.send("Buzz");
  } else {
    res.send(n);
  }
});

module.exports = router;
