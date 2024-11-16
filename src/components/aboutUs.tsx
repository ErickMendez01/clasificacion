"use client";
import { Card } from "@nextui-org/react";
import React from "react";

const AboutUs = () => {
  return (
    <div
      id="conocenos"
      className="py-16 px-6 sm:px-12 md:px-24 lg:px-48 bg-gray-50 dark:bg-gray-800 text-center rounded-xl transition-all"
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Conócenos
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Somos un equipo apasionado y comprometido en proporcionar soluciones
          efectivas y personalizadas para nuestros clientes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
          <Card className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl transition hover:shadow-2xl">
            <h3 className="text-lg font-semibold">Misión</h3>
            <p className="mt-2 text-sm">
              Brindar apoyo de calidad en la administración clínica con
              soluciones tecnológicas eficientes y fáciles de usar.
            </p>
          </Card>
          <Card className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl transition hover:shadow-2xl">
            <h3 className="text-lg font-semibold">Visión</h3>
            <p className="mt-2 text-sm">
              Ser la plataforma líder en gestión de pacientes, ofreciendo
              seguridad, precisión y apoyo a profesionales de salud mental.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
