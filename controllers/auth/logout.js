const { User } = require('../../models/MongooseModels');

const logout = async (req, res) => {
  const { id } = req.user;

  await User.findByIdAndUpdate(id, { token: '' });

  res.status(204).json();
};

module.exports = logout;
