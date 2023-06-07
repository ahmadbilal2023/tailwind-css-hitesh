import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="w-full h-14 bg-indigo-300 flex justify-between px-4 md:px-4 items-center">
      <div className="text-2xl text-indigo-700 font-bold">PW Skills</div>
      <div className="md:flex hidden font-semibold">
        <div className="mx-[10px]">Home</div>
        <div className="mx-[10px]">About Us</div>
        <div className="mx-[10px]">Contace Us</div>
      </div>
      <div className="md:block hidden px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">
        Login/Signup
      </div>
      <div className="md:hidden">
        <Link className="text-4xl" href={"#"}>
          &#8801;
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
