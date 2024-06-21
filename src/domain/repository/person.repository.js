const PersonModel = require('../models/person.model');

const find = async (filter) =>
    await PersonModel.findOne(filter);
  
  const list = async (filter) =>
    await PersonModel.find(filter);

const create = async (person) =>
  await new PersonModel({ ...person }).save();

const update = async ({ _id }, person) =>
  await PersonModel.findByIdAndUpdate(_id, person, { new: true });

const remove = async ({ _id }) =>
  await PersonModel.findByIdAndDelete(_id);

module.exports = {
  find,
  list,
  create,
  update,
  remove,
};
