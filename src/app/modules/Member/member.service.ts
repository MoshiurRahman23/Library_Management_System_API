import { Member, PrismaClient } from "@prisma/client"
import { IMember } from "./member.interface";

const prisma = new PrismaClient();

const createMember = async (params: IMember) => {
    // console.log(params);
    const memberData = {
        name: params.name,
        email: params.email,
        phone: params.phone,
        membershipDate: params.membershipDate
    }

    const member = await prisma.member.create({
        data: memberData
    });

    return member;
}

const getAllMemberFromBD = async (body: any) => {
    const result = await prisma.member.findMany();
    return result;
};

const getMemberByIdFromBD = async (id: string) => {
    await prisma.member.findFirstOrThrow({
        where: {
            memberId: id
        }
    })
    const result = await prisma.member.findUnique({
        where: {
            memberId: id
        }
    })
    return result
};

const updateIntoDB = async (id: string, data: Partial<Member>) => {
    await prisma.member.findFirstOrThrow({
        where: {
            memberId: id
        }
    })
    const result = await prisma.member.update({
        where: {
            memberId: id
        },
        data
    });
    return result
};

const deletedFromDB = async (id: string, data: Partial<Member>) => {

    await prisma.member.findFirstOrThrow({
        where: {
            memberId: id
        }
    })
    const singleDelete = await prisma.member.delete({
        where: {
            memberId: id
        }
    });
    return singleDelete;
}

export const MemberService = {
    createMember,
    getAllMemberFromBD,
    getMemberByIdFromBD,
    updateIntoDB,
    deletedFromDB
}