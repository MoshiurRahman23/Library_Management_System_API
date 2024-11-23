import { NextFunction, Request, RequestHandler, Response } from "express";
import { MemberService } from "./member.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";




const createMember: RequestHandler = catchAsync(async (req, res) => {

    const result = await MemberService.createMember(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Create Member Successful",
        data: result
    })

})

const getAllMemberFromBD = catchAsync(async (req: Request, res: Response) => {

    const result = await MemberService.getAllMemberFromBD();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "ALL Member Retrieved Successful",
        data: result
    })
});

const getMemberByIdFromBD = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const result = await MemberService.getMemberByIdFromBD(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Retrieved Member Successful By Id",
        data: result
    })
});

const updateIntoDB = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const result = await MemberService.updateIntoDB(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Update Member Successful By Id",
        data: result
    })
});

const deletedMemberFromDB = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const result = await MemberService.deletedFromDB(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Delete Member Successful By Id",
        data: result
    })
})


export const MemberController = {
    createMember,
    getAllMemberFromBD,
    getMemberByIdFromBD,
    updateIntoDB,
    deletedMemberFromDB
}