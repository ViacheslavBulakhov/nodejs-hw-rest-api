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

contactsRouter.get('/:id', authenticate, isValidId, getContactById);

contactsRouter.post('/', authenticate, addContact);

contactsRouter.put('/:id', authenticate, isValidId, updateContact);

contactsRouter.patch(
  '/:contactId/favorite',
  authenticate,
  isValidId,
  validateBody(updateFavoriteShema),
  updateStatusContact
);

contactsRouter.delete('/:id', isValidId, removeContact);

module.exports = contactsRouter;
