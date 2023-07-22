"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textcolor, setTextColor] = useState("white");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#9296a7");
        setTextColor("#ffffff");
      } else {
        setColor("#bbc1dc");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  const handlenav = () => {
    setNav(!nav);
  };
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300  "
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center text-white">
        <Link href={"/"}>
          <h1
            style={{ color: `${textcolor}` }}
            className="font-bold text-white font-serif ml-5"
          >
            <span className="border rounded-b-full shadow-lg p-2 bg-[#aeb9ec]">
              ISathI
            </span>
          </h1>
        </Link>
        <ul style={{ color: `${textcolor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="p-4">
            <Link href={"/products"}>Products</Link>
          </li>
          <li className="p-4 mr-10">
            <Link href={"/"}>Contact</Link>
          </li>
          <label className="flex lg:fixed right-10 lg:mt-4  items-center">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search"
              className="text-black px-4 outline-none rounded-full items-center"
            />
          </label>
        </ul>
        {/* mobile icons */}
        <div className="flex justify-center items-center">
          <label className="sm:hidden  items-center">
            <input
              type="text"
              placeholder="search"
              className="text-black px-4 outline-none rounded-full items-center"
            />
          </label>
          <div className="block sm:hidden z-10" onClick={handlenav}>
            {nav ? (
              <AiOutlineClose
                style={{ color: `${textcolor}` }}
                size={25}
                className="mt-5 mr-6 mb-2 duration-300"
              />
            ) : (
              <AiOutlineMenu
                size={25}
                style={{ color: `${textcolor}` }}
                className="mt-5 mr-6 mb-4 duration-300"
              />
            )}
          </div>
        </div>
        {/* mobile menu */}
        <div
          className={
            nav
              ? " sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#31354a] text-center ease-in duration-300"
              : " sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#bbc1dc]text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-[#576cc8]">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-[#576cc8]">
              <Link href={"/"}>Products</Link>
            </li>
            <li className="p-4 text-4xl hover:text-[#576cc8]">
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
