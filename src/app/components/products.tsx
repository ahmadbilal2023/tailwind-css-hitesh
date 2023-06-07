import React from "react";
import Image from "next/image";
function Products() {
  return (
    <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <p className="text-indigo-800 font-bold text-2xl md:text-4xl text-center">
          Our Products
        </p>
        <div className="w-44 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-5 mb:12"></div>
      </div>
      <div>
        <div className="w-full h-auto flex flex-wrap items-center">
          <div className="w-72 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2 mt-12">
            <Image
              src={"/neurolab-icon.svg"}
              alt="books"
              width={100}
              height={100}
            />
            <p className="text-3xl font-bold text-white">PW Skills Lab</p>
            <p className="text-xl font-bold text-gray-500">
              Supercharge your project development with our robust lab.
            </p>
          </div>
          <div className="w-72 flex flex-col items-center mb-12 p-2 mt-12">
            <Image
              src={"/jobPortal-icon.svg"}
              alt="books"
              width={200}
              height={200}
            />
            <p className="text-3xl font-bold text-white">Job Portal</p>
            <p className="text-xl font-bold text-gray-500">
              Supercharge your project development with our robust lab.
            </p>
          </div>
          <div className="w-72 flex flex-col items-center mb-12 p-2 mt-12">
            <Image
              src={"/internship-icon.svg"}
              alt="books"
              width={200}
              height={200}
            />
            <p className="text-3xl font-bold text-white">Experience portal</p>
            <p className="text-xl font-bold text-gray-500">
              PW Skills's self-paced experience portal priorities hands-on
              training with 570+ intership projects.
            </p>
          </div>
          <div className="w-72 flex flex-col items-center mb-12 p-2 mt-12">
            <Image
              src={"/affilitatePortal-icon.svg"}
              alt="books"
              width={200}
              height={200}
            />
            <p className="text-3xl font-bold text-white">affiliate</p>
            <p className="text-xl font-bold text-gray-500">
              Explore affiliate marketing opportunities with PW Skills and
              attain financial freedom.
            </p>
          </div>
          <div className="w-72 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2 mt-12">
            <Image
              src={"/halloffame-icon.svg"}
              alt="books"
              width={100}
              height={100}
            />
            <p className="text-3xl font-bold text-white">PW Skills Lab</p>
            <p className="text-xl font-bold text-gray-500">
              Supercharge your project development with our robust lab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
