import React from "react";

function Practice() {
  return (
    <main className="grid place-content-center">
      <div className="text-white text-4xl text-center m-6">Text</div>
      <div>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-lg flex items-center space-x-4">
          <div>
            <img
              className="h-12 w-12"
              src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg"
              alt=""
            />
          </div>
          <div>
            <div className="text-2xl font-medium">
              Tailwind Css
              <p className="text-slate-500 text-base">by Ahmad bilal Farooqi</p>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-sky-500 w-36 mx-auto text-center mt-2 text-white text-base p-2 rounded-md hover:bg-white hover:text-black dark:bg-red-600">
        By now
      </button>
      <div className="text-center my-4">
        <p className="text-white sm:text-red-600 md:text-green-500">
          lorm ipsum dolor.
        </p>
      </div>
      <div className="mt-3"></div>
      <div className="max-w-sm mx-auto bg-white rounded-xl md:max-w-2xl">
        <div className="md:flex">
          <div>
            <img
              className="h-48 w-full object-cover md:h-full md:w-80"
              src="https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="sunset"
            />
          </div>
          <div className="p-8 ml-7">
            <div className="uppercase tracking-wider text-sm text-indigo-500 font-semibold">
              An Awesom Picture
            </div>
            <a
              href="#"
              className="block mt-1 text-lg font-medium hover:text-blue-700"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              <p>
                {" "}
                Optio blanditiis tenetur,{" "}
                <span className="bg-yellow-200 p-[2.5px] rounded-sm ">
                  obcaecati
                </span>{" "}
                maiores nulla praesentium mollitia
              </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Practice;
