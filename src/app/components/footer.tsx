import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12 pb-6">
      <div>
        <Image src={"/PWSkills-white.png"} alt="" height={150} width={150} />
        <p className="my-4">Email us: support@pwskills.com</p>
        <Image src={"/iso-9001-2015.svg"} alt="" height={100} width={100} />
      </div>
      <div>
        <h1 className="text-xl font-bold mt-4">PW Skills</h1>
        <div className="w-32 h-1 border-2 border-yellow-300 rounded-xl my-2"></div>
        <div>
          <p>About us</p>
          <p>FAQs</p>
          <p>Privacy policy</p>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold mt-4">Products</h1>
        <div className="w-32 h-1 border-2 border-yellow-300 rounded-xl my-2"></div>
        <div>
          <p>PW Skills Lab</p>
          <p>Job Portal</p>
          <p>Job Portal</p>
          <p>Experience Portal</p>
          <p>Become an affiliate</p>
          <p>Hall of fame</p>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold mt-4">Links</h1>
        <div className="w-32 h-1 border-2 border-yellow-300 rounded-xl my-2"></div>
        <div>
          <p>Discord Channel</p>
          <p>PW Youtube</p>
          <p>Careers</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
