const { Contact } = require('../../models/MongooseModels');

const { ctrlWrapper, HttpError } = require('../../helpers');

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;

  const filter = { owner };

  if (favorite === 'false' || favorite === 'true') {
    filter.favorite = favorite;
  } else if (favorite !== undefined) {
    throw HttpError(400);
  }

  const data = await Contact.find(filter, '-createdAt -updatedAt', {
    skip,
    limit,
  }).populate('owner', 'email subscription -_id');

  res.json(data);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
};
