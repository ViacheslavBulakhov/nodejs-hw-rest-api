const { reqContactSchema, updateFavoriteShema } = require('./contact.js');

const {
  registerSchema,
  logInSchema,
  updateUserSubscriptionSchema,
  emailSchema,
} = require('./user.js');

module.exports = {
  reqContactSchema,
  updateFavoriteShema,
  registerSchema,
  logInSchema,
  updateUserSubscriptionSchema,
  emailSchema,
};
