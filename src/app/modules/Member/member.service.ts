import { Member, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const createMember = async (data: any) => {
    const memberData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        membershipDate: data.membershipDate
    }

    const member = await prisma.member.create({
        data: memberData
    });

    return member;
}

const getAllMemberFromBD = async () => {
    const result = await prisma.member.findMany();
    return result;
};

const getMemberByIdFromBD = async (id: any) => {
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