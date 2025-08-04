// // // import React from 'react'
// // // import list from "../../public/list.json"

// // // function Freebook() {
// // //     const filterData=list.filter((data)=>data.category==="Free")
// // //     console.log(filterData)
// // //   return <div> </div>;
    
// // // }

// // // export default Freebook;
// // import React from 'react';
// // import list from "../../public/list.json";

// // function Freebook() {
// //   const filterData = list.filter((data) => data.category === "Free");

// //   return (
// //     <div>
// //       {filterData.map((book) => (
// //         <div key={book.id}>
// //           <h3>{book.name}</h3>
// //           <p>{book.title}</p>
// //           <img src={book.image} alt={book.name} width="300" />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Freebook;
// import React, { useEffect, useState } from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// function Freebook() {
//   const [filterData, setFilterData] = useState([]);

//   useEffect(() => {
//     fetch('/list.json') // ✅ Correct way to access public folder files
//       .then((res) => res.json())
//       .then((data) => {
//         const filtered = data.filter((item) => item.category === "Free");
//         setFilterData(filtered);
//       });
//   }, []);

//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
//         <div>
//              <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
//         <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accusantium veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla non suscipit, iure neque earum?</p>
//       </div>
      
//         <div>
//       <Slider {...settings}>
//    {filterData.map((item)=>(
//     <Cards item={item} key={item.id}/>
//    ))}
//       </Slider>
//     </div>
//     </div>
//     </>
//   );
// }

// export default Freebook;
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards"; // ✅ Import Cards component

function Freebook() {
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch('/list.json') // ✅ This works if list.json is in the public folder
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => item.category === "Free");
        setFilterData(filtered);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accusantium veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla non suscipit, iure neque earum?
        </p>
      </div>

      <div className="mt-4">
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
