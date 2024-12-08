
import React from 'react'
import { LiaPhoneSolid } from "react-icons/lia";
import { FaRegEnvelope } from "react-icons/fa";
import Link from 'next/link';


const Contact = () => {
  return (
    <div className="w-full h-auto max-w-screen-2xl mt-5 mx-auto overflow-hidden flex flex-col gap-10 lg:flex-row md:gap-5 p-6 lg:mt-[181px]">
      <nav className='flex font-poppins font-normal text-text2 gap-1 opacity-50 -mt-10 lg:-mt-28 absolute'>
        <Link href="/">Home</Link>
        <span> / </span>
        <Link href='/Contact' >Contact</Link>
      </nav>
      {/* Left Section */}
      <div className="w-full max-w-[340px] mx-auto  rounded-[4px] drop-shadow-lg flex flex-col p-6 lg:p-10 bg-white">
        <div className="flex flex-col text-left py-4">
          <div className="flex gap-2 text-left py-2">
            <div className="w-[40px] h-[40px] flex justify-center bg-secondary2 items-center rounded-full">
              <LiaPhoneSolid className="text-text size-[20px]" />
            </div>
            <p className="font-poppins text-[16px] font-medium leading-[24px] flex items-center">
              Call To Us
            </p>
          </div>
          <p className="font-poppins text-text2 text-[14px] font-normal py-2 leading-[21px]">
            We are available 24/7, 7 days a week.
          </p>
          <p className="font-poppins text-text2 text-[14px] py-2 font-normal leading-[21px]">
            Phone: +8801611112222
          </p>
        </div>

        <hr className="w-full my-4" />

        <div className="flex flex-col text-left py-4">
          <div className="flex gap-2 text-left py-2">
            <div className="w-[40px] h-[40px] flex justify-center bg-secondary2 items-center rounded-full">
              <FaRegEnvelope className="text-text size-[20px]" />
            </div>
            <p className="font-poppins text-[16px] font-medium leading-[24px] flex items-center">
              Write To Us
            </p>
          </div>
          <p className="font-poppins text-text2 text-[14px] font-normal py-2 leading-[21px]">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="font-poppins text-text2 text-[14px] py-2 font-normal leading-[21px]">
            Emails: customer@exclusive.com
          </p>
          <p className="font-poppins text-text2 text-[14px] py-2 font-normal leading-[21px]">
            Emails: support@exclusive.com
          </p>
        </div>
      </div>

      {/* Right Form Section */}
      
        <form className="w-full max-w-[800px] bg-white px-[31px] py-10  rounded-[4px] drop-shadow-lg">
          <div className="flex flex-col md:flex-row  gap-4 ">
            <input
              className="w-full  bg-secondary text-text2 opacity-75 pl-2 h-[50px] rounded-md"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-full  bg-secondary text-text2 opacity-75 pl-2 h-[50px] rounded-md"
              type="email"
              placeholder="Your Email"
            />
            <input
              className="w-full  bg-secondary text-text2 opacity-75 pl-2 h-[50px] rounded-md"
              type="text"
              placeholder="Your Phone"
            />
          </div>

          <div className="mt-4 py-5">
            <textarea
              className="w-full h-[150px] lg:h-[207px] bg-secondary text-text2 opacity-75 p-2 rounded-md"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className='flex justify-end '>
          <button className="w-full h-[56px] md:w-[215px]  text-center mt-4 bg-button2 text-white px-6 py-2 rounded-md">
            Send Message
          </button>
          </div>
        </form>
      
    </div>
  )
}
export default Contact;
