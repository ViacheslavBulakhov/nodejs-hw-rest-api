const Joi = require('joi');

const reqContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const updateFavoriteShema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  reqContactSchema,
  updateFavoriteShema,
};
