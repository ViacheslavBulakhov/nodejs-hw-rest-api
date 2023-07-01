const express = require('express');

const { validateBody } = require('../../middlewares');
const { registerSchema, logInSchema } = require('../../models/JoiSchemas');
const { register, login } = require('../../controllers/auth');

const authRouter = express.Router();

authRouter.post('/register', validateBody(registerSchema), register);

authRouter.post('/login', validateBody(logInSchema), login);

authRouter.post('/logout', validateBody(registerSchema), () =>
  console.log('logout')
);

module.exports = authRouter;
