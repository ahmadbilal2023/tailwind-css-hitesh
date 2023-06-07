import Image from "next/image";
import React from "react";

function Student() {
  return (
    //  heading start
    <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <p className="text-indigo-800 font-bold text-2xl md:text-4xl text-center">
          "Pure Hardwork, No Shortcuts!"
        </p>
        <div className="w-44 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-5 mb:12"></div>
      </div>
      {/* heading close */}

      <div className="w-full flex flex-wrap justify-evenly">
        <div className="w-44 flex flex-col items-center mt-12">
          <Image src={"/books-icon.svg"} alt="books" width={200} height={200} />
          <p className="text-3xl font-bold text-white">600+</p>
          <p className="text-xl font-bold text-gray-500">Differnet Courses</p>
        </div>
        <div className="w-44 flex flex-col items-center mt-12">
          <Image src={"/student-icon.svg"} alt="books" width={200} height={200} />
          <p className="text-3xl font-bold text-white">700,000+</p>
          <p className="text-xl font-bold text-gray-500">Students Enrolled</p>
        </div>
        <div className="w-44 flex flex-col items-center mt-12">
          <Image src={"/credit-card-icon.svg"} alt="books" width={200} height={200} />
          <p className="text-3xl font-bold text-white">10,000+</p>
          <p className="text-xl font-bold text-gray-500">Successful Transition</p>
        </div>
      </div>
    </div>
  );
}

export default Student;
