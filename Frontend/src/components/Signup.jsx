// import React from 'react'
// import { Link } from 'react-router-dom';
// import Login from './Login'; 
// import { useForm } from "react-hook-form";



// function Signup() {
//       const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm();
    
//       const onSubmit = (data) => console.log(data);
//   return (
//   <>
//   <div className="flex h-screen items-center justify-center ">  
//       <div className=" w-600px border-2px shadow-md p-5 rounded-md relative">
//   <div className="">
//     <form method onSubmit={handleSubmit(onSubmit)}="dialog">
//       {/* if there is a button in form, it will close the modal */}
//       <Link to="/"   
//        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
//     <h3 className="font-bold text-lg">Signup</h3>
//         <div className="mt-4  space-y-2">
//         <span>
//             Name
//         </span>
//         <br />
//         <input type="text" placeholder="Enter your fullname" className='w-80 px-3 py-1 border rounded md outline-none'
//          {...register("name", { required: true })}
//         />
//         <br />
//           {errors.name && (
//                 <p className="text-red-500 text-sm">Email is required</p>
//               )}
//     </div>
//     <div className="mt-4  space-y-2">
//         <span>
//            Email 
//         </span>
//         <br />
//         <input type="email" placeholder="Enter your email" className='w-80 px-3 py-1 border rounded md outline-none'
//          {...register("email", { required: true })}
//         />
//         <br />
//           {errors.name && (
//                 <p className="text-red-500 text-sm">Email is required</p>
//               )}
//     </div>
//     {/*Password */}
//     <div className="mt-4  space-y-2">
//         <span>
//             Password
//         </span>
//         <br />
//         <input type="text" placeholder="Enter your password" className='w-80 px-3 py-1 border rounded md outline-none'
//          {...register("password", { required: true })}
//         />
//         <br />
//         {errors.password && (
//                 <p className="text-red-500 text-sm">Password is required</p>
//               )}
//     </div>
  
//    <div className="flex justify-around mt-4">
//     <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
//     <p className="text-xl"></p>
//     <p>Have account?{" "} 
//          <button className="underline text-blue-500 cursor-pointer"
//                 onClick={()=>document.getElementById("my_modal_3").showModal()}>
//                 Login
//               </button>{""}
//               <Login />
//               </p>
//  </div>
//  </form>
//     </div>
//     </div>
//     </div>
//   </>
//   )
// }

// export default Signup
import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-600px border-2px shadow-md p-5 rounded-md relative">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Signup</h3>

            <div className="mt-4 space-y-2">
              <span>Name</span><br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border rounded md outline-none"
                {...register("name", { required: true })}
              /><br />
              {errors.name && (
                <p className="text-red-500 text-sm">Name is required</p>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Email</span><br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded md outline-none"
                {...register("email", { required: true })}
              /><br />
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span><br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded md outline-none"
                {...register("password", { required: true })}
              /><br />
              {errors.password && (
                <p className="text-red-500 text-sm">Password is required</p>
              )}
            </div>

            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Signup
              </button>

              <p>Have account?{" "}
                <button
                  type="button"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
              </p>
            </div>
          </form>

          {/* Login component placed outside so it doesn't auto-execute */}
          <Login />
        </div>
      </div>
    </>
  );
}

export default Signup;
