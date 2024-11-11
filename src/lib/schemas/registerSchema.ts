import React from "react";
import z from "zod";

export const registerSchema = z.object({
  name: z.string().min(3,{message:"El nombre es requerido"}),
  email: z.string().email({ message: "El correo electronico es invalido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
