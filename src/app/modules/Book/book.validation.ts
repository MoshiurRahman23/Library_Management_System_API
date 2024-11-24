import { z } from "zod";

const bookValidation = z.object({
    body: z.object({
        bookId: z.string().optional(),
        title: z.string().optional(),
        genre: z.string().optional(),
        publishedYear: z.number().optional(),
        totalCopies: z.number().optional(),
        availableCopies: z.number().optional()
    })
});
export const bookValidationSchema = {
    bookValidation
}