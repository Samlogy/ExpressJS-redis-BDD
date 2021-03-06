const express = require('express');
const router = express.Router();

const bdd = require('../db');


router.post('/search', (req, res, next) => {
    let id = req.body.id;
  
    bdd.hgetall(id, (err, obj) => {
      if(!obj){
        res.render('search', {
          error: 'User does not exist'
        });
      }else{
        obj.id = id;
        res.render('details', {
          user: obj
        });
      }
    });
});

router.get('/add', (req, res, next) => {
      res.render('add');
}).post('/add', (req, res, next) => {
      let id = req.body.id;
      let first_name = req.body.first_name;
      let last_name = req.body.last_name;
      let email = req.body.email;
      let phone = req.body.phone;
  
      bdd.hmset(id, [
        'first_name', first_name,
        'last_name', last_name,
        'email', email,
        'phone', phone
      ], (err, reply) => {
        if(err){
          console.log(err);
        }
        console.log(reply);
        res.redirect('/');
      });
});

router.delete('/delete/:id', (req, res, next) => {
    bdd.del(req.params.id);
    res.redirect('/');
});

module.exports = router;

