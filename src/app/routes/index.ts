import express from 'express';
import { bookRoutes } from '../modules/Book/book.route';
import { MemberRoutes } from '../modules/Member/member.route';
import { BorrowAndReturnBookRoutes } from '../modules/BorrowBook/borrowBook.route';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/book',
        route: bookRoutes
    },
    {
        path: '/member',
        route: MemberRoutes
    },
    {
        path: '/borrow',
        route: BorrowAndReturnBookRoutes
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))



export default router;