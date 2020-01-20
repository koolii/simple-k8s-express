var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    message: "Root index"
  });
});

router.get('/api/v1/hello', function (req, res) {
  res.json({
    message: "Hello,world"
  });
});

router.get('/terminate', function (req, res) {
  process.exit()
})


module.exports = router;