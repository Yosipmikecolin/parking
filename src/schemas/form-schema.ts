import { z } from "zod";

export const FormDataSchema = z.object({
  plate: z
    .string({ required_error: "campo requerido" })
    .min(1, { message: "campo requerido" }),
  motive_immobilization: z
    .string({ required_error: "campo requerido" })
    .min(1, { message: "campo requerido" }),

  kilometer: z
    .string({ required_error: "campo requerido" })
    .min(1, { message: "campo requerido" }),

  registration_date: z
    .string({ required_error: "campo requerido" })
    .min(1, { message: "campo requerido" }),

  brand: z.string({ required_error: "campo requerido" }),

  vehicle_type: z.string({ required_error: "campo requerido" }),

  offense_type: z.string({ required_error: "campo requerido" }),

  model: z.string({ required_error: "campo requerido" }),
});

export type TypeFormData = z.infer<typeof FormDataSchema>;
