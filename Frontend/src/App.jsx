// import React from 'react'
// import Home from "./home/Home";
// import { Routes, Route } from "react-router-dom";
// import { Courses } from "./courses/Courses";


// function App() {
//   return(<>
//     {/* <Home/>
//     <Course/> */}
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/course" element={<Courses/>}/>

//     </Routes>
//    </>
//    )
  
// }

// export default App
// src/App.jsx
import React from 'react';
import Home from './home/Home';
import Courses from './courses/courses';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <div className="dark:bg-slate-900  dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
