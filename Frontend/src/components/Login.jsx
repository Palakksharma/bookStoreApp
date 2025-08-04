// // import React from 'react'
// // import { Link } from 'react-router-dom';
// // import { useForm } from "react-hook-form"

// // function Login() {
// //      const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm()

// //   const onSubmit = (data) => console.log(data)
// //   return (
// //     <div>
// //         <dialog id="my_modal_3" className="modal">
// //   <div className="modal-box">
// //     <form onSubmit = {handleSubmit(onSubmit)} method="dialog">
// //       {/* if there is a button in form, it will close the modal */}
// //       <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>


// //     </form>
// //     <h3 className="font-bold text-lg">Login</h3>
// //     <div className="mt-4  space-y-2">
// //         <span>
// //             Email
// //         </span>
// //         <br />
// //         <input type="email" placeholder="Enter your email" className='w-80 px-3 py-1 border rounded md outline-none'
// //         {...register("email", { required: true })}
// //         />
// //         {errors.email && <span>This field is required</span>}
// //     </div>
// //     {/*Password */}
// //     <div className="mt-4  space-y-2">
// //         <span>
// //             Password
// //         </span>
// //         <br />
// //         <input type="text" placeholder="Enter your password" className='w-80 px-3 py-1 border rounded md outline-none'
// //         {...register("password", { required: true })}
// //         />
// //         {errors.password && <span>This field is required</span>}
// //     </div>
  
// //    <div className="flex justify-around mt-4">
// //     <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
// //     <p>Not registered?{" "} 
// //          <Link to="/signup" className="underline text-blue-500 cursor-pointer">
// //                 Signup
// //               </Link>
// //               </p>
// //  </div>
// //     </div>
// //     </dialog>
// //     </div>
// //   )
// // }

// // export default Login
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     const modal = document.getElementById("my_modal_3");
//     if (modal) {
//       modal.showModal();
//     }
//   }, []);

//   const closeModal = () => {
//     const modal = document.getElementById("my_modal_3");
//     if (modal) {
//       modal.close();
//     }
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Login Submitted");
//     console.log("Email:", email);
//     console.log("Password:", password);
//     // Add actual login logic here
//   };

//   return (
//     <div>
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box">
//           {/* Close Button */}
//           <Link
//             to="/"
//             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//             onClick={closeModal}
//           >
//             ✕
//           </Link>

//           <h3 className="font-bold text-lg">Login</h3>

//           {/* Real Login Form */}
//           <form onSubmit={handleLogin}>
//             <div className="mt-4 space-y-2">
//               <span>Email</span>
//               <br />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="w-80 px-3 py-1 border rounded md outline-none"
//                 required
//               />
//             </div>

//             <div className="mt-4 space-y-2">
//               <span>Password</span>
//               <br />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 className="w-80 px-3 py-1 border rounded md outline-none"
//                 required
//               />
//             </div>

//             <div className="flex justify-around mt-4 items-center">
//               <button
//                 type="submit"
//                 className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
//               >
//                 Login
//               </button>

//               <p>
//                 Not registered?{" "}
//                 <Link to="/signup" className="underline text-blue-500 cursor-pointer">
//                   Signup
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </dialog>
//     </div>
//   );
// }

// export default Login;
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password" // ✅ fixed
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">Password is required</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>

              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;