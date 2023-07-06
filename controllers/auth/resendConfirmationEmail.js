const { User } = require('../../models/MongooseModels');
const { HttpError, sendEmail } = require('../../helpers');

const { BASE_URL } = process.env;

const resendConfirmationEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(404, 'User not found');
  }

  if (user.verify) {
    throw HttpError(400, 'Verification has already been passed');
  }

  const emailLink = `${BASE_URL}/api/users/verify/${user.verificationToken}`;

  const verifyEmail = {
    to: email,
    subject: 'Verify email',
    html: `<a target="_blank" href="${emailLink}">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.json({
    message: 'Verification email sent',
  });
};

module.exports = resendConfirmationEmail;
