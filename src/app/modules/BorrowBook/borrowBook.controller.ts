import { Request } from "express";
import { BorrowBookService } from "./borrowBook.service";

const borrowABook = async (req: Request, res: Response) => {
    try {
        const result = await BorrowBookService.borrowABookFromDB();
        res.status(200).json({
            success: true,
            message: "Borrow Book successful",
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.name || "Something went wrong !!",
            error: error
        })
    }
};
export const BorrowBookController = {
    borrowABook
}