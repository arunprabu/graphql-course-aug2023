var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // rendering template
  res.render('index', { title: 'Express' });
});

module.exports = router;
