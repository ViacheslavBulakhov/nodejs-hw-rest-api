const { ctrlWrapper } = require('../../helpers');

const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const getCurrentUser = require('./getCurrentUser');
const updateUserSubscription = require('./updateUserSubscription');
const updateAvatar = require('./updateAvatar');
const verifyEmail = require('./verifyEmail');
const resendConfirmationEmail = require('./resendConfirmationEmail');

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getCurrentUser: ctrlWrapper(getCurrentUser),
  updateUserSubscription: ctrlWrapper(updateUserSubscription),
  updateAvatar: ctrlWrapper(updateAvatar),
  verifyEmail: ctrlWrapper(verifyEmail),
  resendConfirmationEmail: ctrlWrapper(resendConfirmationEmail),
};
