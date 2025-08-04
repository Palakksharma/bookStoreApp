// // File: ./courses/courses.jsx
// import React from 'react';

// const courses = () => {
//   return (
//     <div>
//       <h1>Courses</h1>
//     </div>
//   );
// };

// export default courses;
import React from 'react'
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";


function courses() {

  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
        <Course/>
        </div>
    <Footer/>
    </>
   
  )
}

export default courses