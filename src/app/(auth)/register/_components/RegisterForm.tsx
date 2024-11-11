"use client";
import { RegisterSchema, registerSchema } from "@/lib/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Link,
} from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
  };

  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-black">
          <div className="flex flex-col items-center gap-3">
            <h1 className="font-medium text-xl">Registro</h1>
          </div>
          <p className=" flex flex-center text-black">
           Registrate ahora para obtener disfutrar de Clinica Mental
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
          <Input
              isRequired
              type="text"
              label="Name"
              placeholder="Introduce tu nombre"
              {...register("name")}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />
            <Input
              isRequired
              type="email"
              label="Email"
              placeholder="Introduce tu correo electrónico"
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            />
            <Input
              isRequired
              type="password"
              label="Password"
              placeholder="Introduce la contraseña"
              {...register("password")}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
            />
            <Button
              fullWidth
              className="bg-black text-white font-bold"
              radius="lg"
              type="submit"
            >
              Registrarse
            </Button>
          </div>
        </form>
      </CardBody>
      <CardFooter>
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="text-black hover:text-brand underline underline-offset-4"
          >
            <p className="font-semibold text-default-400 text-small">
              Política de privacidad y manejo de datos
            </p>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
