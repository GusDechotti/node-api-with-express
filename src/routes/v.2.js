const { Router } = require('express');
const person = require('./routers/person.router');

const routers = Router()
  .use('/person',person())

module.exports =
  Router()
    .use('/v2/', routers);
