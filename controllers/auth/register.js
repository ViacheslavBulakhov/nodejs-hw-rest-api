const bcrypt = require('bcrypt');

const { User } = require('../../models/MongooseModels');

const register = async (req, res) => {
  const { password } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = register;
