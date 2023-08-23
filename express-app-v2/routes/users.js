var express = require('express');
var router = express.Router();

/* CRUD APP */
// create user [DONE]
// list users [DONE]
// fetch user details by userId [DONE]
// update user [DONE]
// delete user [TODO]

/* GET users/. */
router.get('/', (req, res, next) => {
  // connect to the db
  // exec a query to fetch users from db
  // then, we need to send the data
  // here sending static data
  const users = [
    {
      id: 1,
      name: "John",
      phone: "123245678",
      email: "j@k.com",
    },
    {
      id: 2,
      name: "Steve",
      phone: "98765432",
      email: "s@t.com",
    },
  ];
  res.json(users);
});

// POST users/ 
router.post('/', (req, res, next) => {
  // req body will carry the form data from the front end
  console.log(req.body);
  // the above form data should be saved in db
  // after saving in db we should send updated status

  // here sending static data
  res.json({
    id: 1213456,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: "Saved Successfully!",
  });
});

// GET -- users/1 (with userId) -- URL Param
router.get('/:userId', (req, res, next) => {
  console.log(req.params.userId); // URL Param
  res.json({
    id: req.params.userId,
    name: "John",
    phone: "123245678",
    email: "j@k.com",
  });
});

// PUT users/1 (with userId) -- URL Param
router.put('/:userId', (req, res, next) => {
  // read url param 
  console.log(req.params.userId);
  // read the form data -- req.body
  console.log(req.body);
  // we should save the above data in db
  // here sending static response
  res.json({
    message: 'Updated Successfully!'
  });
});

// TODO: learn about PATCH Method
// learn about the diff b/w PUT and PATCH 
// TODO: DELETE user with userId

module.exports = router;
