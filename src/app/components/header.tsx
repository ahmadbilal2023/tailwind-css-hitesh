import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="w-full h-auto">
      <Image
        src={"/skill.jpg"}
        alt="car"
        width={2000}
        height={2000}
        className="w-full hidden md:block"
      />
      <Image
        src={"/mobile.jpg"}
        alt="car"
        width={2000}
        height={2000}
        className="w-full md:hidden"
      />
    </div>
  );
}

export default Header;
