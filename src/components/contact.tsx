import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contacto"
      className="py-5 px-6 sm:px-12 md:px-24 lg:px-48 transition-all"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Contacto
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          ¿Tienes preguntas o necesitas asistencia? ¡Nos encantaría ayudarte!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-left">
          <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-700 shadow-lg">
            <FaEnvelope className="text-primary w-6 h-6" />
            <div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                Email
              </p>
              <a
                href="mailto:contacto@ejemplo.com"
                className="text-gray-600 dark:text-gray-400"
              >
                contacto@ejemplo.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-700 shadow-lg">
            <FaPhone className="text-primary w-6 h-6" />
            <div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                Teléfono
              </p>
              <a
                href="tel:+123456789"
                className="text-gray-600 dark:text-gray-400"
              >
                +123 456 789
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-700 shadow-lg">
            <FaMapMarkerAlt className="text-primary w-6 h-6" />
            <div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                Ubicación
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                123 Calle Ejemplo, Ciudad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
