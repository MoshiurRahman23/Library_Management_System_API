import express from 'express';
import { BorrowBookController } from './borrowBook.controller';


const router = express.Router();

const router.post('/', BorrowBookController.borrowABook)


export const BorrowBookRoutes = router;