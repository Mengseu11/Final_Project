import { useEffect, useState } from "react";
import AppNavbar from "./AppNavbar";

export default function Banner() {
  return (
    <section className="relative w-full min-h-screen bg-[url('https://i.imgur.com/iqARzHY.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/30 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"></div>
      
      <AppNavbar />
      
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Let's find   
            <strong className="block font-extrabold text-rose-500">
              your perfect style
            </strong>
            with WatchMe.
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl sm:leading-relaxed">
            Discover the perfect timepiece that matches your personality and lifestyle.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="men"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Shop Now
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}