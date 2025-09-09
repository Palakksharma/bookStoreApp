
// import React from 'react';

// import Home from './home/Home';
// import Courses from './courses/courses';
// import { Routes, Route, Navigate } from "react-router-dom";
// import Signup from './components/Signup';
// import { useAuth } from "./context/AuthContext";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";




// function App() {
//   const { authUser, setAuthUser: _setAuthUser } = useAuth();
//     console.log(authUser);
//   return (
//     <>
//     <div className="dark:bg-slate-900  dark:text-white">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
      
//       </div>
//     </>
//   );
// }

// export default App;
import React from 'react';
import Home from './home/Home';
import Courses from './courses/courses';
import Signup from './components/Signup';
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { authUser } = useAuth();
  console.log(authUser);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <ToastContainer 
        position="top-right"
        autoClose={3000}
      />
    </div>
  );
}

export default App;
