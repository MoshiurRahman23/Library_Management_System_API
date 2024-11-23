import { z } from "zod";

const updates = z.object({
    body: z.object({
        name: z.string().optional(),
        phone: z.string().optional(),
        membershipDate: z.string().optional()
    })
});

export const MemberValidationSchema = {
    updates
}