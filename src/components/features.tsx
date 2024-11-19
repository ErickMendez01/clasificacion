"use client";
import { Card } from "@nextui-org/react";
import { FaUserMd } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { AiOutlineBarChart } from "react-icons/ai";
import { RiShieldCheckLine } from "react-icons/ri";

const Features = () => {
  return (
    <div id="funcionalidades" className="px-6 lg:px-20 py-2">
      <div className="max-w-4xl mx-auto">
        <div className="md:w-2/3 lg:w-1/2 mx-auto text-center">
          <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Funcionalidades clave de Clínica Mental
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Diseñada para simplificar y optimizar la evaluación de pacientes en
            el entorno clínico.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl transition hover:shadow-2xl">
            <div className="space-y-4">
              <FaUserMd className="w-12 h-12 text-secondary mx-auto" />
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white text-center group-hover:text-secondary transition">
                Evaluaciones Simples
              </h5>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Ingresa los datos indicados en el formulario y realiza una
                evolución de manera rápida y sencilla.
              </p>
            </div>
          </Card>
          <Card className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl transition hover:shadow-2xl">
            <div className="space-y-4">
              <GiArtificialIntelligence className="w-12 h-12 text-secondary mx-auto" />
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white text-center group-hover:text-secondary transition">
                Clasificación Automática
              </h5>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Evalúa y clasifica automáticamente a los pacientes utilizando un
                árbol de decisión inteligente.
              </p>
            </div>
          </Card>

          <Card className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl transition hover:shadow-2xl">
            <div className="space-y-4">
              <AiOutlineBarChart className="w-12 h-12 text-secondary mx-auto" />
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white text-center group-hover:text-secondary transition">
                Alertas Reactivas
              </h5>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Genera alertas reactivas con el resultado de la evolución del
                paciente.
              </p>
            </div>
          </Card>

          <Card className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl transition hover:shadow-2xl">
            <div className="space-y-4">
              <RiShieldCheckLine className="w-12 h-12 text-secondary mx-auto" />
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white text-center group-hover:text-secondary transition">
                Seguridad y Privacidad
              </h5>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Protege los datos de tus pacientes con un sistema seguro y
                cumplimiento de estándares.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;
