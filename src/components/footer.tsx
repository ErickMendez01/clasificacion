import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-5 px-6 sm:px-12 md:px-24 lg:px-48">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Clínica Mental
            </h2>
            <p className="text-gray-400 max-w-xs">
              Somos una plataforma dedicada a ayudar a los profesionales de
              clínicas mentales a gestionar y clasificar a sus pacientes de
              manera eficaz y segura.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#conocenos"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Conócenos
                </a>
              </li>
              <li>
                <a
                  href="#funcionalidades"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Funcionalidades
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Clínica Mental. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
