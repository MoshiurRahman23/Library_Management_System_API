import { Book, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createBook = async (data: any) => {
    const bookData = {
        title: data.title,
        genre: data.genre,
        publishedYear: data.publishedYear,
        totalCopies: data.totalCopies,
        availableCopies: data.availableCopies
    }
    const book = await prisma.book.create({
        data: bookData
    });
    return book;
};

const getAllBooksFromDB = async () => {
    const result = await prisma.book.findMany();
    return result;
};

const getBookByIdFromDB = async (id: string) => {
    const result = await prisma.book.findFirst({
        where: {
            bookId: id
        }
    })
    return result
};

const updateIntoDB = async (id: string, data: Partial<Book>) => {
    await prisma.book.findFirstOrThrow({
        where: {
            bookId: id
        }
    })

    const result = await prisma.book.update({
        where: {
            bookId: id
        },
        data
    });
    return result
};

const deletedFromDB = async (id: string) => {
    await prisma.book.findFirstOrThrow({
        where: {
            bookId: id
        }
    })
    const singleDelete = await prisma.book.delete({
        where: {
            bookId: id
        }
    });
    return singleDelete;
}


export const BookService = {
    createBook,
    getAllBooksFromDB,
    getBookByIdFromDB,
    updateIntoDB,
    deletedFromDB
}