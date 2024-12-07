import React, { ReactNode } from "react";

const TitleBar = ({
  children,
  title,
  tag,
  timer,
}: {
  children?: ReactNode;
  title: string;
  tag: string;
  timer?: ReactNode;
}) => {
  return (
    <div className="w-full h-auto bg-transparent mt-[6%] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
      {/* Left Section */}
      <div className="flex flex-col w-full sm:w-auto gap-4">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-secondary2" />
          <p className="text-secondary2 text-lg font-semibold">{title}</p>
        </div>

        {/* Tag and Timer Section */}
        <div className="flex justify-between items-center w-full sm:w-auto gap-4">
          <h1 className="text-xl sm:text-3xl font-poppins font-semibold tracking-wide">
            {tag}
          </h1>
          <div className="text-right">{timer}</div>
        </div>
      </div>

      {/* Right Section (Children) */}
      <div className="mt-4 sm:mt-0">{children}</div>
    </div>
  );
};

export default TitleBar;
