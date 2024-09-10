import { countrySchema } from "@/schemas/country.schema";
import { z } from "zod";

export type Country = z.infer<typeof countrySchema>;
