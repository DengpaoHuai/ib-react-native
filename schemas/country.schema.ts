import { z } from "zod";

export const countrySchema = z.object({
  name: z.string().max(50).min(3, "Name must be at least 2 characters long."),
  population: z.number().int().positive(),
  region: z.string().max(50),
});
