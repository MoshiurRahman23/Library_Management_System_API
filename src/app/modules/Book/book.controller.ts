import { Request, Response } from "express";
import { BookService } from "./book.service";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const createBook = async (req: Request, res: Response) => {
    // console.log(req);
    try {
        const result = await BookService.createBook(req.body);
        res.status(200).json({
            success: true,
            message: "Book Create successfully",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.name || "Something went Wrong!!",
            error: error
        })
    }
};

const getAllBooksFromDB = async (req: Request, res: Response) => {
    try {
        const result = await BookService.getAllBooksFromDB();
        res.status(200).json({
            success: true,
            message: 'Books retrieved successfully',
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.name || "Something went Wrong!!",
            error: error
        })
    }
}

const getBookByIdFromDB = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await BookService.getBookByIdFromDB(id);
        res.status(200).json({
            success: true,
            message: 'Book retrieved successfully By Id',
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.name || "Something went Wrong!!",
            error: error
        })
    }
};

const updateIntoDB = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const result = await BookService.updateIntoDB(id, req.body);
        res.status(200).json({
            success: true,
            message: 'Book Update successful',
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.name || "Something went Wrong!!",
            error: error
        })
    }
};

const deletedBookFromDB = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await BookService.deletedFromDB(id);
        res.status(200).json({
            success: true,
            message: 'Book deleted successful',
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.name || "Something went Wrong!!",
            error: error
        })
    }
};

export const BookController = {
    createBook,
    getAllBooksFromDB,
    getBookByIdFromDB,
    updateIntoDB,
    deletedBookFromDB
}