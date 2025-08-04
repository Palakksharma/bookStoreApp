import React from 'react';
import banner from "../../public/Banner1.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Step In, Discover Stories That{" "}
              <span className='text-pink-500'>Stay with You Forever</span>
            </h1>
            <p className="text-xl">
              Discover your next great read with our beautifully designed, lightning-fast platform.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              {/* Working email icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 opacity-70"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75M21.75 6.75l-9.75 6.75L2.25 6.75M21.75 6.75H2.25" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>

        <div className= "order-1 w-full md:w-1/2">
          <img src={banner} className="w-92 h-92" alt ="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
