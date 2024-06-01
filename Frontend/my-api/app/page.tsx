// import React from 'react';

// export default function Page() {
//   return (
//     <div>
//       <header className="bg-red-600">
//         <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
//           <div className="flex h-16 items-center justify-between">
//             <div className="hidden md:block flex-grow"> 
//               <nav aria-label="Global">
//                 <ul className="flex items-center justify-center gap-6 text-sm">
//                   <li>
//                     <a className="text-gray-500 transition hover:text-gray-500/75" href="/products"> Products </a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>

//             <div className="flex items-center gap-4">
//               <div className="sm:flex sm:gap-4">
//                 <a
//                   className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
//                   href="/login"
//                 >
//                   Login
//                 </a>

//                 <div className="hidden sm:flex">
//                   <a
//                     className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
//                     href="/register"
//                   >
//                     Register
//                   </a>
//                 </div>
//               </div>

//               <div className="block md:hidden">
//                 <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
//                   {/* <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                   </svg> */}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }
import React from 'react';

export default function Page() {
  return (
    <div className="bg-[#800020] min-h-screen"> {/* Ajout de la classe bg-[#800020] pour la couleur bordo et min-h-screen pour la hauteur minimale */}
      <header className="bg-red-300 border-b-4 border-red-800">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="hidden md:block flex-grow">
              <nav aria-label="Global">
                <ul className="flex items-center justify-center gap-6 text-sm">
                  <li>
                    <a className="text-blue-500 transition hover:text-gray-800/100" href="/products"> Products </a>
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
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}








