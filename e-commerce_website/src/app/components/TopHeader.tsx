import Image from "next/image";
import Link from "next/link";
import {Poppins} from "next/font/google";

const poppins =Poppins({
    weight: '400',
    subsets:['latin']})

export default function TopHeader() {
  return (
    <div className={`${poppins.className}  bg-black text-text w-full text-center py-2 px-4 overflow-hidden`}>
      <div className="flex items-center max-w-screen-2xl mx-auto">
        <p className="flex-1 text-left sm:text-center break-words leading-[21px]">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link href="#" className="underline leading-[24px] font-semibold text-left hover:text-gray-400">
            Sign Up Now
          </Link>
       </p>
        <button
          className="flex items-center justify-center mt-2 sm:mt-0 "
          type="button"
        >
        <p className="hidden md:flex">English</p>
          <Image
            priority
            src="/DropDown.svg"
            height={20}
            width={20}
            alt="close banner"
            className="w-5 h-auto"
          />
        </button>
       
      </div>
    </div>
  );
}
