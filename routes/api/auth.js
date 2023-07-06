const express = require('express');

const { validateBody, authenticate, upload } = require('../../middlewares');

const {
  registerSchema,
  logInSchema,
  updateUserSubscriptionSchema,
  emailSchema,
} = require('../../models/JoiSchemas');

const {
  register,
  login,
  logout,
  getCurrentUser,
  updateUserSubscription,
  updateAvatar,
  verifyEmail,
  resendConfirmationEmail,
} = require('../../controllers/auth');

const authRouter = express.Router();

authRouter.post('/register', validateBody(registerSchema), register);
authRouter.get('/verify/:verificationToken', verifyEmail);
authRouter.post('/verify', validateBody(emailSchema), resendConfirmationEmail);

authRouter.post('/login', validateBody(logInSchema), login);
authRouter.post('/logout', authenticate, logout);

authRouter.post('/current', authenticate, getCurrentUser);

authRouter.patch(
  '/',
  authenticate,
  validateBody(updateUserSubscriptionSchema),
  updateUserSubscription
);

authRouter.patch(
  '/avatars',
  authenticate,
  upload.single('avatar'),
  updateAvatar
);

module.exports = authRouter;
