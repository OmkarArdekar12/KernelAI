import Link from "next/link";
import { GiProcessor, GiComputerFan } from "react-icons/gi";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-2 text-center">
      <h3 className="text-gray-200/30 text-4xl md:text-6xl">404</h3>
      <p className="text-gray-200/30 text-xl md:text-2xl mb-3">
        Page Not Found!
      </p>
      <Link
        href="/"
        replace
        className="flex gap-3 flex-wrap items-center justify-center group bg-green-600/50 px-4 py-2 md:px-6 md:py-4 rounded-2xl border-2 border-transparent text-gray-200 hover:font-semibold hover:text-white hover:bg-green-600/20 hover:border-green-900"
      >
        <GiComputerFan className="size-5 md:size-6 text-white hidden group-hover:inline group-hover:animate-spin" />
        <GiProcessor className="size-5 md:size-6 text-gray-200 inline group-hover:hidden" />
        Go Back To KernelAI
      </Link>
    </div>
  );
};

export default NotFound;
