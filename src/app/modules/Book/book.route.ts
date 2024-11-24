import express from 'express';
import { BookController } from './book.controller';
import validateRequest from '../../middleware/validateRequest';
import { bookValidationSchema } from './book.validation';

const router = express.Router();

router.post('/', BookController.createBook);

router.get('/', BookController.getAllBooksFromDB);

router.get('/:id', BookController.getBookByIdFromDB);

router.put(
    '/:id',
    validateRequest(bookValidationSchema.bookValidation),
    BookController.updateIntoDB
);

router.delete('/:id', BookController.deletedBookFromDB);

export const bookRoutes = router;