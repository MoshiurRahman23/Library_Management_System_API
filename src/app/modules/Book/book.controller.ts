import { NextFunction, Request, Response } from "express";
import { BookService } from "./book.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";


const createBook = catchAsync(async (req: Request, res: Response) => {
    const result = await BookService.createBook(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book create successful",
        data: result
    })
});

const getAllBooksFromDB = catchAsync(async (req: Request, res: Response) => {
    const result = await BookService.getAllBooksFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All Book Retrieved Successful",
        data: result
    })
});

const getBookByIdFromDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BookService.getBookByIdFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book Retrieved Successful By Id",
        data: result
    })
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BookService.updateIntoDB(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Update Response Successful",
        data: result
    })
});

const deletedBookFromDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BookService.deletedFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book delete Successful",
        data: result
    })
});

export const BookController = {
    createBook,
    getAllBooksFromDB,
    getBookByIdFromDB,
    updateIntoDB,
    deletedBookFromDB
}