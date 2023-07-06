const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const { v4: uuidv4 } = require('uuid');

const { User } = require('../../models/MongooseModels');
const { HttpError, sendEmail } = require('../../helpers');

const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { password, email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, 'Email in use');
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);

  const verificationToken = uuidv4();

  const emailLink = `${BASE_URL}/api/users/verify/${verificationToken}`;

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: 'Verify email',
    html: `<a target="_blank" href="${emailLink}">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
      verificationToken,
    },
  });
};

module.exports = register;
