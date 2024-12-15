import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { customers } from "@/db/schema";
import { z } from "zod";

export const customerInsertSchema = createInsertSchema(customers, {
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  address1: z.string().min(1),
  address2: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  zip: z.string().min(1),
  notes: z.string().min(1),
  active: z.boolean(),
});
