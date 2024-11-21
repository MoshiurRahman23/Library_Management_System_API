import { Request, Response } from "express";
import { MemberService } from "./member.service";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const createMember = async (req: Request, res: Response) => {
    try {
        const result = await MemberService.createMember(req.body);
        res.status(200).json({
            success: true,
            message: "Member create successfully",
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

const getAllMemberFromBD = async (req: Request, res: Response) => {
    try {
        const result = await prisma.member.findMany()
        res.status(200).json({
            success: true,
            message: "Member retrieved Successfully",
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

const getMemberByIdFromBD = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await MemberService.getMemberByIdFromBD(id);
        res.status(200).json({
            success: true,
            message: "Member retrieved successfully By Id",
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
        const result = await MemberService.updateIntoDB(id, req.body);
        res.status(200).json({
            success: true,
            message: "Member Updated successful",
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

const deletedMemberFromDB = async (req: Request, res: Response) => {
    const { id } = req.params;
    // console.log(id);
    try {
        const result = await MemberService.deletedFromDB(id, req.body);
        res.status(200).json({
            success: true,
            message: "Member Deleted successful",
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


export const MemberController = {
    createMember,
    getAllMemberFromBD,
    getMemberByIdFromBD,
    updateIntoDB,
    deletedMemberFromDB
}