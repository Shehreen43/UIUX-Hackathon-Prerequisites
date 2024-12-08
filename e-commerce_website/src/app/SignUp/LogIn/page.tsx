import React from "react";
import Image from "next/image";

const LogIn = () => {
  return (
    <section className="max-w-screen-2xl mx-auto grid grid-cols-1 mt-5 gap-5 md:gap-12 lg:grid-cols-2 lg:mt-10">
      {/* left side */}
      <div className="w-full max-w-[805px] mx-auto max-h-[781px] pt-[75px] bg-[#CBE4E8] gap-0 rounded-tr-[4px] rounded-bl-[4px]">
        <Image
          src="/SignUp.png"
          alt="Login"
          height={706}
          width={919}
          className="w-full h-auto"
        />
      </div>

      {/* right side */}
      <div className="w-full h-auto max-w-[371px] max-h-[326px] gap-2 lg:gap-[40px] flex flex-col mt[5%] lg:mt-[30%] md:ml-[10%]">
        <div className="w-full ">
          <div className="w-full">
            <h2 className="font-inter pb-4 text-text2 text-[36px] font-medium leading-[30px] tracking-[0.04em] text-left">
              Log in to Exclusive{" "}
            </h2>
            <p className="font-poppins pb-5 text-text2 text-[16px] font-normal leading-[24px] text-left">
              Enter your details below
            </p>
          </div>
          <form action="">
            <div>
              {" "}
              <input
                type="text"
                placeholder="Email or Phone Number"
                pattern="^(\+?[0-9\s()-]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$"
                required
                className=" w-full font-poppins text-text2 opacity-50 text-[16px] font-normal leading-[24px] py-5 text-left border-b-2 border-text2 border-opacity-45 focus:outline-none focus:border-button2"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                required
                className="py-5 border-b-2 border-text2 w-full font-poppins text-[16px] font-normal leading-[24px] text-left border-opacity-45 focus:outline-none focus:border-button2 rounded-md"
              />
            </div>
          </form>
        </div>

        <div className="w-full flex justify-between items-center py-5">
          <button className="bg-button2 rounded-[4px]">
            <p className="font-poppins text-[16px] m-5 px-5 text-text font-medium leading-[24px]">
              Log In
            </p>
          </button>
          <p className="font-poppins text-[16px] font-normal text-secondary2 leading-[24px] text-left">
            Forget Password?
          </p>
        </div>
      </div>
    </section>
  );
};
export default LogIn;