
import React from 'react'
import { LiaPhoneSolid } from "react-icons/lia";
import { FaRegEnvelope } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='w-full flex flex-col'>
      {/* left */}
      <div className='w-full max-w-md  flex flex-col p-10 shadow-sm shadow-black-[0.5%]'>

        <div className='flex flex-col text-left py-4'>
        <div className='flex  gap-2 text-left py-2'>
          <div className='w-[40px] h-[40px] flex justify-center bg-secondary2 items-center rounded-full'><LiaPhoneSolid className='text-text size-[20px]' /></div>
          <p className="font-poppins text-[16px] font-medium leading-[24px] text-left flex justify-center items-center">Call To Us</p> 
          </div>
          <p className="font-poppins text-text2 text-[14px] font-normal py-2 leading-[21px] text-left">
          We are available 24/7, 7 days a week.
          </p>
          <p className="font-poppins text-text2 text-[14px] py-2 font-normal leading-[21px] text-left">
          Phone: +8801611112222
          </p>
      </div>

      <hr className=' w-[270px]' />

      <div className='flex flex-col text-left py-4'>
        <div className='flex  gap-2 text-left py-2'>
          <div className='w-[40px] h-[40px] flex justify-center bg-secondary2 items-center rounded-full'><FaRegEnvelope className='text-text size-[20px]' /></div>
          <p className="font-poppins text-[16px] font-medium leading-[24px] text-left flex justify-center items-center">Write To US</p> 
          </div>
          <p className="font-poppins text-text2 text-[14px] font-normal py-2 leading-[21px] text-left">
          Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="font-poppins text-text2 text-[14px] py-2 font-normal leading-[21px] text-left">
          Emails: customer@exclusive.com
          </p>
          <p className="font-poppins text-text2 text-[14px] py-2 font-normal leading-[21px] text-left">
          Emails: support@exclusive.com
          </p>
      </div>
      </div>

      
      
      {/* right */}
      <div>
        <form action=""></form>
      </div>
    </div>
  )
}
export default Contact;
