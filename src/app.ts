import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { bookRoutes } from './app/modules/Book/book.route';
import { MemberRoutes } from './app/modules/Member/member.route';

const app: Application = express();
app.use(cors());

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// app.get('/', (req: Request, res: Response) => {
//     res.send({
//         Message: "Library Management System API...."
//     })
// });

app.use('/api/v1/books', bookRoutes)
app.use('/api/v1/members', MemberRoutes)

export default app;