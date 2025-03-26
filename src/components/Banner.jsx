import { useEffect, useState } from "react";
import AppNavbar from "./AppNavbar";


export default function Banner() {
  return (
    
    <section className="relative bg-[url('https://i.imgur.com/iqARzHY.jpeg')] bg-cover  bg-no-repeat">
      <AppNavbar/>
      
      <div className="inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto  px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right ml-5">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Let  find 
            <strong className="block font-extrabold text-rose-500">
              {" "}
              your style{" "}
            </strong>
            with WatchMe.
          </h1>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="men"
              className="block w-full mx-auto rounded-sm bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
            >
              Get Started
            </a>


          </div>
        </div>
      </div>
    </section>
  );
}
