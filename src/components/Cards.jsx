import React from "react";
import { useState } from "react";

function Cards() {
  const urls = [
    "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3991976/pexels-photo-3991976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6122259/pexels-photo-6122259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/16062018/pexels-photo-16062018/free-photo-of-an-empty-stadium-with-red-seats-and-a-red-and-white-sign.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://www.thisisanfield.com/wp-content/uploads/Squadphoto2324.jpg",
  ];
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index === 0) return setIndex(urls.length - 1);
    else setIndex(index - 1);
  };

  const handleNext = () => {
    if (index === urls.length - 1) return setIndex(0);
    else setIndex(index + 1);
  };

  return (
    <>
      <div className="card flex justify-between items-center m-4 transition-all duration-500 ease-in-out">
        <div className="ml-10">
          <button
            type="button"
            onClick={handlePrev}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-2"
          >
            Prev
          </button>
        </div>
        <div className="img flex justify-center items-center w-full lg:w-[710px] lg:h-[410px] overflow-hidden rounded-lg shadow-lg bg-red-400 transition-all duration-500 ease-in-out">
          <img
            className="lg:w-[700px] lg:h-[400px] object-cover rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            src={urls[index]}
            alt=""
          />
        </div>
        <div className="mr-10">
          <button
            type="button"
            onClick={handleNext}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mr-2"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
