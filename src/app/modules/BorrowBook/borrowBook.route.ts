import express from 'express';
import { BorrowAndReturnBookController } from './borrowBook.controller';


const router = express.Router();

router.post('/', BorrowAndReturnBookController.getBorrowBookIntoDB)


export const BorrowAndReturnBookRoutes = router;