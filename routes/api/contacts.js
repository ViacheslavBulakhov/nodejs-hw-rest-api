const express = require('express');

const { isValidId, validateBody, authenticate } = require('../../middlewares');
const { updateFavoriteShema } = require('../../models/JoiSchemas');

const {
  getAllContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require('../../controllers/contacts');

const contactsRouter = express.Router();

contactsRouter.get('/', authenticate, getAllContacts);

contactsRouter.get('/:id', isValidId, getContactById);

contactsRouter.post('/', addContact);

contactsRouter.put('/:id', isValidId, updateContact);

contactsRouter.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(updateFavoriteShema),
  updateStatusContact
);

contactsRouter.delete('/:id', isValidId, removeContact);

module.exports = contactsRouter;
