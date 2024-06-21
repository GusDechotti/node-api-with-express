const repository = require('../domain/repository/person.repository');
const crypto = require('../modules/crypto');

class PersonController {
  static index(req, res, next) {
    res.async(repository.list());
  }

  static async show(req, res, next) {
    res.async(repository.list(req.params));
  }

  static async create(req, res, next) {
    res.async(repository.create(req.body));
  }

  static async update(req, res, next) {
    res.async(repository.update(req.params, req.body));
  }

  static async remove(req, res, next) {
    res.async(repository.remove(req.params));
  }
}

module.exports = PersonController;