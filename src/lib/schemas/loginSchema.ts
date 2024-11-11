import React from "react";
import z, { TypeOf } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "El correo electronico es invalido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
