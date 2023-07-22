import Link from "next/link";
import ProductList from "../../fetchdata/getdata";
import React from "react";

export default async function page() {
  const plist = ProductList();
  const List = await plist;
  console.log(List);
  return (
    <div className="text-center mt-10 p-6 ">
      <div className="font-bold font-serif text-2xl border mb-10 bg-[#bbc1dc]  p-2 rounded-full sm:ml-10">
        Product
      </div>
      <div>
        {List.map((items) => {
          return (
            <div className=" md:grid md:grid-cols-2  gap-6 border md:rounded-r-full sm:rounded-t-lg overflow-hidden mb-10 p-4 bg-gradient-to-t to-[#bbc1dc] from-blue-300">
              <div className="container mx-auto pl-6 sm:item-center">
                <div>
                  <Link href={`/products/${items.id}`}>
                    <img
                      src={items.image}
                      alt="images"
                      className="w-[400px]  h-[400px] mb-10 border rounded-full shadow-2xl object-contain hover:scale-95 duration-300 "
                    />
                  </Link>
                </div>
              </div>
              <div className="  mb-10  pr-6 inline ">
                <ul className="mt-10 ">
                  <li className="mt-1 mb-4 text-left pr-2 mr-4">
                    <span className="font-bold font-serif mr-3">Title:</span>
                    {items.title}
                  </li>

                  <li className="  p-2  text-start  ">
                    <span className="font-bold font-serif mr-3">Price:</span>
                    {items.price}
                  </li>
                  <button className=" border mt-10 font-serif p-2 rounded-full bg-yellow-400  md:flex items-center shadow-2xl">
                    Add to cart
                  </button>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
