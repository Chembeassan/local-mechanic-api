const { body, param } = require('express-validator');

exports.validateMechanic = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('location')
    .isIn(['Blantyre', 'Lilongwe', 'Mzuzu', 'Zomba'])
    .withMessage('Invalid location'),
  body('contact')
    .matches(/^\+265\d{9}$/)
    .withMessage('Invalid Malawi phone number'),
  body('rating')
    .optional()
    .isFloat({ min: 1, max: 5 })
    .withMessage('Rating must be between 1-5'),
  body('hourlyRate')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Hourly rate cannot be negative')
];

exports.validateService = [
  body('mechanic')
    .notEmpty()
    .isMongoId()
    .withMessage('Valid mechanic ID required'),
  body('name').trim().notEmpty().withMessage('Service name required'),
  body('price')
    .isFloat({ min: 0 })
    .withMessage('Price must be positive'),
  body('duration')
    .optional()
    .isFloat({ min: 0.5 })
    .withMessage('Minimum duration is 0.5 hours')
];
