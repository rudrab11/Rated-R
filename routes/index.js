var express = require('express');
var fs = require('fs')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});


router.get('/about', function (req, res, next) {
  res.render('about');
});

router.get('/events', function (req, res, next) {
  res.render('gallery');
});

router.get('/contact', function (req, res, next) {
  res.render('contact');
});


router.get('/success', function (req, res, next) {
  res.render('success');
});

router.post("/submit", function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let number = req.body.number;
  fs.appendFile("data.txt", `name: ${name} , email: ${email} , number: ${number} \n`, (e) => {
    if (e) {
      console.log(e);
    } else {
      res.redirect("/success");
    }
  })
})


module.exports = router;
