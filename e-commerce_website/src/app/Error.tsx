'use client';

import Link from "next/link";

 export default function Error() {
    
   return (
     <div className="h-screen pt-24 flex justify-center items-center bg-transparent">
        <h1 className="font-inter text-text2 text-[110px] font-medium leading-[115px] tracking-[0.03em] text-left transition-transform duration-300 ease-in-out transform hover:text-[#ff3e50] hover:scale-110">
        404 Not Found
        </h1>
        <p className="font-poppins text-text2 text-[16px] font-normal leading-[24px] text-left ">Your visited page not found. You may go home page.</p>

        <button className="w-[254px] h-[56px] p-[16px_48px] gap-[10px] rounded-1 bg-button2 transition-transform duration-300 ease-in-out transform hover:bg-[#ff3e50] hover:scale-110">
        <p className="font-poppins text-text text-[16px] font-medium leading-[24px] text-left bg-transparent">
           <Link href='/'>Back to home page</Link>
      </p>

       </button>

     </div>
   );
 }