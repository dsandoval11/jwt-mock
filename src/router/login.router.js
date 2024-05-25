const login = require('../auth/login');

const router = require('express').Router();

router.post('/', login);

module.exports = {
  router,
  path: '/login',
};