import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const globalErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        success: true,
        message: error.name || "Something went wrong",
        error: error
    })
}

export default globalErrorHandler;