
// import React from "react";
// import { useAuth } from "../context/AuthContext";
// import { toast } from "react-toastify";

// function Logout() {
//   const { setAuthUser } = useAuth();

//   const handleLogout = () => {
//     try {
//       // Clear auth user
//       setAuthUser(null);

//       // Remove from localStorage
//       localStorage.removeItem("Users");

//       // Show success toast
//       toast.success("Logout successfully");
//       window.location.reload();
//     } catch (error) {
//       toast.error("Error: " + error.message);
//     }
//   };

//   return (
//     <div>
//       <button
//         className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Logout;
import React from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

function Logout() {
  const { setAuthUser } = useAuth();

  const handleLogout = () => {
    try {
      // Clear auth user
      setAuthUser(null);

      localStorage.removeItem("Users");
      toast.success("Logout successfully");
   
      
      setTimeout(()=>{window.location.reload();
           
      },3000);
      

      
    //   window.location.href = "/signup"; // <-- this reloads and navigates
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(()=> {},3000);
    }
  };

  return (
    <button
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;
