import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const errorHandler = (req: Request, res: Response, next: NextFunction) => {
    // console.log(req);
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND",
        error: {
            message: "Invalid book ID"
        }
    })
};

export default errorHandler;