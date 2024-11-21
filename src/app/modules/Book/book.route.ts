import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

router.post('/', BookController.createBook);

router.get('/', BookController.getAllBooksFromDB);

router.get('/:id', BookController.getBookByIdFromDB);

router.put('/:id', BookController.updateIntoDB);

router.delete('/:id', BookController.deletedBookFromDB);

export const bookRoutes = router;