const { Router } = require('express');
const personController = require('../../controllers/person.controller');
const validator = require('../helper/validator.helper');
const schema = require('./person.schema');

module.exports = () => {
  const v = validator(schema);

  const router = Router();
  router.get('/', personController.index);
  router.get('/:_id', personController.show);
  router.post('/', v, personController.create);
  router.put('/:_id', v, personController.update);
  router.delete('/:_id', personController.remove);
  return router;
};
