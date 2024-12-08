// import Image from "next/image";
// import TopHeader from "./components/TopHeader";
// import TitleBar from "./components/TitleBar";
// import CountdownTimer from "./components/CountdownTimer";

// export default function Home() {
//   return (
//     <>
//         <div className="absolute top-[114px] left-[100px]">
//         <Image  src="/SignUp.png" alt="" width={295} height={298} className=" rounded-[20px]" />

//         <p className="  text-[15px] text-left">
//            T-shirt with Tape Details
//         </p>
//        <div className="flex flex-row space-x-1 mt-[-25px]">
         
//         <Image src="/Half_star.svg" alt="star" width={8.79} height={16.72} />
//         <p className="text-[14px]">4.5/5</p>
//        </div>
//        <p className="text-[15px] mt-[-25px] text-left">$120</p>
//         <p className="text-[15px] mt-[-25px] text-left">$120<p><s>$260</s> <span>-20%</span> </p>
// </p>
//         </div>
//        </>
  
   
//   )
// }
// {/* <TitleBar 
//       title="Categories"
//       tag="Browse By Category"
//       timer={<CountdownTimer />}
//     >
//       <button className="bg-secondary2 text-white px-4 py-2 rounded">
//         View All
//       </button>
//     </TitleBar> */}
// components/ProductCard.js
import { FaShoppingCart } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";

export default function ProductCard() {
  return (
    <div className="relative w-64 bg-transparent border border-gray-200 rounded-lg shadow hover:shadow-lg">
      {/* Discount Badge */}
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
        -35%
      </div>

      {/* Eye Icon */}
      <div className="absolute w-5 h-5 top-2 right-2 text-gray-500 rounded-full bg-slate-300 hover:text-black">
        <AiFillEye size={20} />
      </div>
      <div className="absolute top-8  w-5 h-5 right-2 text-gray-500  rounded-full bg-slate-300 hover:text-black">
        <IoIosHeartEmpty size={20} />
      </div>

      {/* Product Image */}
      <img
        src="/SignUp.png"
        alt="Product"
        className="w-full h-40 object-cover rounded-t-lg"
      />
<button className="flex items-center justify-center w-full px-4 py-2 text-white bg-black hover:bg-gray-800 rounded-md">
          <FaShoppingCart className="" /> Add To Cart
        </button>
      {/* Add to Cart Button */}
      <div className="p-4 text-left">
        <p className="text-black font-normal font-poppins">ASUS FHD Gaming Laptop</p>

        {/* Price */}
        <p className="mt-2 text-lg font-bold text-red-600">$960  <span><s className="text-gray-400">$1160</s> </span></p>

        {/* Rating */}
        <div className="flex justify-start mt-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))} <span className="text-gray-300"> (65) </span>
        </div>
      </div>
    </div>
  );
}
