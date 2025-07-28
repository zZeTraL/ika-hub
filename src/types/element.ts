import { z } from "zod";

export const ElementSchema = z.object({
    id: z.string(),
    name: z.string(),
    desc: z.string(),
    color: z.string(),
    icon: z.string(),
});

export const ElementRecordSchema = z.record(z.string(), ElementSchema);

export type ElementType = z.infer<typeof ElementSchema>;
export type ElementRecordType = z.infer<typeof ElementRecordSchema>;
