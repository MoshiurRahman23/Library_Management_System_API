import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BorrowAndReturnBookServices } from "./borrowBook.service";

const getBorrowBookIntoDB = catchAsync(async (req, res) => {
    const result = await BorrowAndReturnBookServices.borrowBookFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book borrowed successfully",
        data: result
    })
});

export const BorrowAndReturnBookController = {
    getBorrowBookIntoDB
}