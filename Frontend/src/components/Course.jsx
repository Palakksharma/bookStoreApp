
import React, { useEffect, useState } from 'react';
import Cards from './Cards'; // Ensure this path is correct
import axios from 'axios'; // ✅ Import axios
import { Link } from 'react-router-dom';


const Course = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get("http://localhost:4001/books"); 
 // ✅ Fetch using axios
        setList(res.data);
      } catch (error) {
        console.error("Error loading list.json:", error);
      }
    };

    getList(); // Call the async function
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here!</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, 
            assumenda? Repellendus, iste corrupti? Tempore laudantium repellendus 
            accusamus accusantium sed architecto odio, nisi expedita quas quidem 
            nesciunt debitis dolore non aspernatur praesentium assumenda sint 
            quibusdam, perspiciatis, explicabo sequi fugiat amet animi eos aut 
            Nobis quisquam reiciendis sunt quis sed magnam consequatur!
          </p>
          <Link to="/"> 
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 ">
        {list.length > 0 ? (
          list.map((item) => (
            <Cards key={item.id} item={item} />
          ))
        ) : (
          <p className="text-center mt-10">Loading...</p>
        )}
      </div>
    </>
  );
};

export default Course;


