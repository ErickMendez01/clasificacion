"use client";

import { Button, useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import { DiagnosticForm } from "./diagnosticForm";

const Header = () => {
  const { isOpen, onOpenChange } = useDisclosure(); // Usamos useDisclosure correctamente

  return (
    <div>
      <DiagnosticForm isOpen={isOpen} onOpenChange={onOpenChange} /> {/* Pasamos las props correctas */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-500 dark:from-blue-900"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-500 to-sky-400 dark:to-indigo-800"></div>
        </div>

        <div className="relative pt-36 px-4 sm:px-6 lg:px-8">
          <div className="lg:w-2/3 mx-auto text-center">
            <h1 className="text-gray-900 dark:text-white font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
              Gestiona y clasifica a tus pacientes en{" "}
              <span className="text-primary dark:text-white">
                Clínica Mental
              </span>
            </h1>
            <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              La plataforma integral para profesionales de la salud mental.
              Administra pacientes y clasifícalos automáticamente mediante
              tecnología avanzada de árboles de decisión.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <div className="flex flex-col gap-y-4">
                <Button
                  as={Link}
                  className="text-white font-bold bg-black"
                  variant="flat"
                  radius="lg"
                  href="/register"
                >
                  Empieza ahora!
                </Button>
                <Button
                  className="text-white font-bold bg-blue-900"
                  variant="flat"
                  radius="lg"
                  onClick={() => onOpenChange()}
                >
                  Realiza un diagnóstico ahora!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;



// Copyright (c) [año de publicación] Tailus-UI/astro-theme
// Licensed under the MIT License
// Original repository: https://github.com/Tailus-UI/astro-theme

// Modificaciones Copyright (c) [año de publicación] [Tu Nombre o Empresa]
// Licensed under the MIT License
