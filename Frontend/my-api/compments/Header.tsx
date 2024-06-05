// import React from 'react';

// export default function Header() {
//   return (
//     <header className="bg-orange">
//       <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Section du logo */}
//           <div className="flex items-center gap-1">
//             <img src="/image/logo4.png" alt="Logo" className="h-" style={{ marginTop: '0px', marginBottom: '0px' }} />
//           </div>

//           {/* Section de navigation globale */}
//           <div className="flex-grow flex justify-center">
//             <nav aria-label="Global">
//               <ul className="flex items-center gap-6 text-sm">
//                 <li>
//                   <a className="text-blue-500 transition hover:text-gray-800" href="/"> Home </a>
//                 </li>
//                 <li>
//                   <a className="text-blue-500 transition hover:text-gray-800" href="/products"> Products </a>
//                 </li>
//                 <li>
//                   <a className="text-blue-500 transition hover:text-gray-800" href="/contact"> Contact </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>

//           {/* Section des boutons de connexion/inscription */}
//           <div className="flex items-center gap-4">
//             <div className="sm:flex sm:gap-4">
//               <a
//                 className="rounded-md bg-blue-400 px-5 py-2.5 text-sm font-medium text-white shadow"
//                 href="/login"
//               >
//                 Login
//               </a>

//               <div className="hidden sm:flex">
//                 <a
//                   className="rounded-md bg-blue-400 px-5 py-2.5 text-sm font-medium text-white shadow"
//                   href="/register"
//                 >
//                   Register
//                 </a>
//               </div>
//             </div>

//             <div className="block md:hidden">
//               <button
//                 className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
//                 aria-label="Open menu"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// import React from "react";
// import Image from "next/image";

// export default function Header() {
//   return (
//     <div className="bg-yellow-300 p-2">
//       <div className= "bg-yellow-300 p-2">
//         <div className="flex h-20 items-center justify-between bg-yellow-300 p-2">
//            //<div className="flex items-center gap-4">
//             <Image
//               src="/image/logo4.png"
//               alt="Logo"
//               className="h-4"
//               height={100}
//               width={100}
//               style={{ marginTop: "4px", marginBottom: "4px" }}
//             />
//           </div>

//           {/* Section de navigation globale */}
//           <div className=" flex-grow flex justify-center">
//             <nav aria-label="Global">
//               <ul className="flex items-center gap-6 text-sm">
//                 <li>
//                   <a
//                     className="block font-extrabold text-rose-700 "
//                     href="/"
//                   >
//                     {" "}
//                     Home{" "}
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-red-500 transition "
//                     href="/products"
//                   >
//                     {" "}
//                     Products{" "}
//                   </a>
//                 </li>

//                 <li>
//                   <a
//                     className="text-blue-500 transition"
//                     href="/contact"
//                     style={{color:'red'}}

//                   >
//                     {" "}
//                     Contact{" "}
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>

//           {/* Section des boutons de connexion/inscription */}

//           <div className="flex items-center gap-4">
//             <div className="sm:flex sm:gap-4">
//               <a
//                 className="rounded-md bg-blue-400 border-2 border-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow"
//                 href="/login"
//               >
//                 Login
//               </a>

//               <div className="hidden sm:flex">
//                 <a
//                   className="rounded-md bg-blue-400 border-2 border-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow"
//                   href="/register"
//                 >
//                   Register
//                 </a>
//               </div>
//             </div>

//             <div className="block md:hidden">
//               <button
//                 className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
//                 aria-label="Open menu"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React from 'react'; 
// import Image from 'next/image';
 

// export default function MYHeader() { 

//   return ( 

//     <header className="bg-orange-500"> {/* Classe Tailwind pour une couleur orange plus vive */} 

//       <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-0"> 

//         <div className="flex h-10 items-center justify-between"> 

//           {/* Section du logo */} 

//           <div className="flex items-center gap-4"> 

//             <Image height={200} width={80} src="/image/logo4.png" alt="Logo" className="h-16" style={{ marginTop: '4px', marginBottom: '4px' }} /> 

//           </div> 

 

//           {/* Section de navigation globale */} 

//           <div className="flex-grow flex justify-center"> 

//             <nav aria-label="Global"> 

//               <ul className="flex items-center gap-6 text-sm"> 

//                 <li> 

//                   <a className="text-blue-500 transition hover:text-gray-800" href="/"> Home </a> 

//                 </li> 

//                 <li> 

//                   <a className="text-blue-500 transition hover:text-gray-800" href="/products"> Products </a> 

//                 </li> 

//                 <li> 

//                   <a className="text-blue-500 transition hover:text-gray-800" href="/contact"> Contact </a> 

//                 </li> 

//               </ul> 

//             </nav> 

//           </div> 

 

//           {/* Section des boutons de connexion/inscription */} 

//           <div className="flex items-center gap-4"> 

//             <div className="sm:flex sm:gap-4"> 

//               <a 

//                 className="rounded-md hover:bg-blue-400 border-2 border-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow" 

//                 href="/login" 

//               > 

//                 Login 

//               </a> 

 

//               <div className="hidden sm:flex"> 

//                 <a 

//                   className="rounded-md bg-blue-400 border-2 border-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow" 

//                   href="/register" 

//                 > 

//                   Register 

//                 </a> 

//               </div> 

//             </div> 

 

//             <div className="block md:hidden"> 

//               <button  

//                 className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" 

//                 aria-label="Open menu" 

//               > 

//                 <svg 

//                   xmlns="http://www.w3.org/2000/svg" 

//                   className="h-5 w-5" 

//                   fill="none" 

//                   viewBox="0 0 24 24" 

//                   stroke="currentColor" 

//                   strokeWidth="2" 

//                 > 

//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /> 

//                 </svg> 

//               </button> 

//             </div> 

//           </div> 

//         </div> 

//       </div> 

//     </header> 

//   ); 

// } 

import React from 'react'; 
import Image from 'next/image';

export default function MYHeader() { 
  return ( 
    <header className="bg-orange-500"> {/*d Classe Tailwind pour une couleur orange plus vive */} 
      <div className="bg-red-0 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"> 
        <div className="flex h-10 items-center justify-between"> 
          {/* Section du logo */} 
          <div className="flex items-center gap-4"> 
            <Image 
              height={80} 
              width={80} 
              src="/image/logo4.png" 
              alt="Logo" 
              className="h-16" 
            /> 
          </div> 

          {/* Section de navigation globale */} 
          <div className="flex-grow flex justify-center"> 
            <nav aria-label="Global"> 
              <ul className="flex items-center gap-6 text-sm"> 
                <li> 
                  <a className="text-blue-500 transition hover:text-gray-800" href="/"> 
                    Accueil 
                  </a> 
                </li> 
                <li> 
                  <a className="text-blue-500 transition hover:text-gray-800" href="/products"> 
                    Produits 
                  </a> 
                </li> 
                <li> 
                  <a className="text-blue-500 transition hover:text-gray-800" href="/contact"> 
                    Contact 
                  </a> 
                </li> 
              </ul> 
            </nav> 
          </div> 

          {/* Section des boutons de connexion/inscription */} 
          <div className="flex items-center gap-4"> 
            <div className="sm:flex sm:gap-4"> 
              <a 
                className="rounded-md hover:bg-blue-400 border-2 border-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow" 
                href="/login" 
              > 
                Connexion 
              </a> 

              <div className="hidden sm:flex"> 
                <a 
                  className="rounded-md bg-blue-400 border-2 border-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow" 
                  href="/register" 
                > 
                  Inscription 
                </a> 
              </div> 
            </div> 

            <div className="block md:hidden"> 
              <button  
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" 
                aria-label="Ouvrir le menu" 
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
  ); 
}