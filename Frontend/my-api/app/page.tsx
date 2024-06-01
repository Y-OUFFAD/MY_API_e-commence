

import React from 'react';

export default function Page() {
  return (
    <div className="bg-[#800020] min-h-screen"> 
      <header className="bg-orange-400">
        <div className="mx-auto max-w-screen-x1 px-4 sm:px-6 lg:px-0">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/image/logo4.png" alt="Logo" className="h-20" style={{marginTop: '4px', marginBottom: '4px'}}/>
            </div>

            <div className="flex-grow flex justify-center">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a className="text-blue-500 transition hover:text-gray-800" href="/products"> Products </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-blue-400 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/login"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-blue-400 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/register"
                  >
                    Register
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button 
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  aria-label="Open menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

