"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Homepage = ({ heading, message }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover  custom-image">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70  z-[2]" />
      <div className="p-5  z-[2]   mt-[9rem]">
        <h2 className="text-3xl font-bold   text-white font-serif">
          {heading}
        </h2>
        <p className="py-5 text-xl text  text-white ">{message}</p>
        <button
          onClick={() => router.push("/products")}
          className="px-8 py-2 border rounded-full hover:bg-[#bbc1dc] text-white mt-10 duration-500 hover:scale-x-1255 font-bold font-serof hover:text-black "
        >
          Shop
        </button>
      </div>
    </div>
  );
};

export default Homepage;
