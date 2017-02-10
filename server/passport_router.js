const local = require('./local_strategies.js');
const express = require('express');
const router = express.Router();

router.post('/login', local.passport.authenticate('login'), (req, res) => {
  res.end();
});

router.post('/signup', local.passport.authenticate('signup'), (req, res) => {
  res.end();
});

router.get('/auth', local.isLoggedIn, (req, res) => {
  res.end();
});

router.get('/logout', (req, res) => {
  req.logout();
  res.end();
});

module.exports = router