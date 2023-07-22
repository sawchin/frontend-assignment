"use client";
import Pdetail from "../../../fetchdata/getdata";

export default async function page(props) {
  const sproduct = Pdetail();
  const sList = await sproduct;
  const currentId = props.params.productdetail;
  const userDetail = sList[currentId - 1];
  return (
    <div className="p-6">
      <div className="font-bold font-serif text-2xl border mt-10 mb-10 bg-[#bbc1dc] text-center p-2 rounded-full sm:ml-10">
        {userDetail.category}
      </div>
      <div className="md:grid md:grid-cols-2 mt-10 gap-10 p-6">
        <div>
          <img
            src={userDetail.image}
            alt={userDetail.category}
            className="md:w-[500px] md:h-[600px] border  p-6 rounded-t-full shadow-2xl"
          />
        </div>
        <ul className="mt-10">
          <li className="mb-10">
            <span className="mt-10 font-bold mb-10 font-serif mr-3">
              Title:
            </span>
            {userDetail.title}
          </li>
          <li className="mb-10">
            <span className="mt-10 font-bold  font-serif mr-3">
              Description:
            </span>
            {userDetail.description}
          </li>
          <li>
            <span className="mt-10 font-bold  font-serif mr-3">Price:</span>
            {userDetail.price}
          </li>
          <button className="mt-10 font-serif font-bold p-4 border rounded-xl  shadow-lg bg-yellow-400  align-center w-full">
            Add to Cart
          </button>
        </ul>
      </div>
    </div>
  );
}
