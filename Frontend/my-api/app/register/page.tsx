

"use client";
// import React, { useState } from 'react';
// import axios from 'axios'; // Importez Axios depuis la bibliothèque Axios

// export default function Page() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirmation, setPasswordConfirmation] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (password !== passwordConfirmation) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/auth/user/', {
//         username,
//         email,
//         password,
//       });

//       console.log('Response:', response.data); // Affichez la réponse du backend dans la console

//       // Si nécessaire, vous pouvez gérer la réponse ici
//       alert('Account created successfully'); // Exemple d'une alerte pour indiquer la création du compte

//     } catch (error) {
//       setError(error.message); // Gérez l'erreur en cas de problème de connexion, etc.
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <section className="bg-white lg:grid lg:min-h-screen lg:grid-cols-12">
//       <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
//         <img
//           alt=""
//           src="/image/tableau17.jpeg"
//           className="absolute inset-0 h-full w-full object-cover opacity-80"
//         />
//         <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center p-12">
//           <a className="block text-white" href="#">
//             <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Welcome to FouART</h2>
//             <p className="mt-4 leading-relaxed text-white/90">
//               Join my community to discover and acquire my unique and original artworks!
//             </p>
//           </a>
//         </div>
//       </section>

//       <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
//         <div className="max-w-xl lg:max-w-3xl">
//           <div className="relative -mt-16 block lg:hidden"></div>

//           <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6 border border-gray-300 rounded-md p-4">
//             {error && <p className="col-span-6 text-red-500">{error}</p>}
//             <div className="col-span-6">
//               <label htmlFor="Username" className="block text-sm font-medium text-gray-700">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="Username"
//                 name="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="mt-1 w-full rounded-md border-2 border-black bg-white text-sm text-gray-700 shadow-sm"
//               />
//             </div>
//             <div className="col-span-6">
//               <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="Email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 w-full rounded-md border-2 border-black bg-white text-sm text-gray-700 shadow-sm"
//               />
//             </div>
//             <div className="col-span-6 sm:col-span-3">
//               <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="Password"
//                 name="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 w-full rounded-md border-2 border-black bg-white text-sm text-gray-700 shadow-sm"
//               />
//             </div>
//             <div className="col-span-6 sm:col-span-3">
//               <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
//                 Password Confirmation
//               </label>
//               <input
//                 type="password"
//                 id="PasswordConfirmation"
//                 name="password_confirmation"
//                 value={passwordConfirmation}
//                 onChange={(e) => setPasswordConfirmation(e.target.value)}
//                 className="mt-1 w-full rounded-md border-2 border-black bg-white text-sm text-gray-700 shadow-sm"
//               />
//             </div>
//             <div className="col-span-6">
//               <label htmlFor="MarketingAccept" className="flex gap-4">
//                 <input
//                   type="checkbox"
//                   id="MarketingAccept"
//                   name="marketing_accept"
//                   className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
//                 />
//                 <span className="text-sm text-gray-700">
//                   I want to receive emails about events, product updates and company announcements.
//                 </span>
//               </label>
//             </div>
//             <div className="col-span-6">
//               <p className="text-sm text-gray-500">
//                 By creating an account, you agree to our
//                 <a href="#" className="text-gray-700 underline"> terms and conditions </a>
//                 and
//                 <a href="#" className="text-gray-700 underline">privacy policy</a>.
//               </p>
//             </div>
//             <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
//                <button
//                 type="button" // Changed from type="submit" to type="button"
//                 onClick={handleSubmit} // Added onClick handler
//                 className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
//               >
//                 Create an account
//               </button>
//               <p className="mt-4 text-sm text-gray-500 sm:mt-0">
//                 Already have an account?
//                 <a href="#" className="text-gray-700 underline">Log in</a>.
//               </p>
//             </div>
//           </form>
//         </div>
//       </main>
//     </section>
//   );
// }

import React, { useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/user/', {
        username,
        email,
        password
      });

      if (response.status === 201) {
        console.log('Account created successfully', response.data);
        setError(null); // Clear any previous errors
      } else {
        throw new Error('Failed to create account');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(JSON.stringify(error.response.data));
      } else {
        setError('An unexpected error occurred');
      }
      console.error('Error:', error);
    }
  };

  return (
    <section className="bg-white lg:grid lg:min-h-screen lg:grid-cols-12">
      <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          alt=""
          src="/image/tableau17.jpeg"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center p-12">
          <a className="block text-white" href="#">
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Welcome to FouART</h2>
            <p className="mt-4 leading-relaxed text-white/90">
              Join my community to discover and acquire my unique and original artworks!
            </p>
          </a>
        </div>
      </section>

      <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div className="max-w-xl lg:max-w-3xl">
          <div className="relative -mt-16 block lg:hidden"></div>

          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6 border border-gray-300 rounded-md p-4">
            {error && <p className="col-span-6 text-red-500">{error}</p>}
            <div className="col-span-6">
              <label htmlFor="Username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 w-full rounded-md border-2 border-black bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md border-2 border-black bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-md border-2 border-black bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                Password Confirmation
              </label>
              <input
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className="mt-1 w-full rounded-md border-2 border-black bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="MarketingAccept" className="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                />
                <span className="text-sm text-gray-700">
                  I want to receive emails about events, product updates and company announcements.
                </span>
              </label>
            </div>
            <div className="col-span-6">
              <p className="text-sm text-gray-500">
                By creating an account, you agree to our
                <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                and
                <a href="#" className="text-gray-700 underline">privacy policy</a>.
              </p>
            </div>
            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                type="submit"
                className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Create an account
              </button>
              <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <a href="#" className="text-gray-700 underline">Log in</a>.
              </p>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
}