import express, { Application, NextFunction, Request } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middleware/GlobalErrorHandler';
import httpStatus from 'http-status';
import errorHandler from './app/middleware/ErrorHandler';

const app: Application = express();
app.use(cors());

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/', router)

app.use(globalErrorHandler)

app.use(errorHandler)

export default app;