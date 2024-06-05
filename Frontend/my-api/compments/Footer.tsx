import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
            href="#MainContent"
          >
            <span className="sr-only">Retour en haut</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="lg:flex lg:items-end lg:justify-between">
          <div className="mt-12 lg:mt-0">
            <p className="mt-4 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <nav aria-label="Footer Navigation - Support">
              <ul className="flex flex-wrap justify-center gap-4 text-sm lg:justify-end">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Conditions Générales
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Politique de Confidentialité
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </nav>

            <p className="mt-8 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              &copy; 2024. Nom de l'entreprise. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}