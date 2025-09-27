import React from "react";

function BlobComp() {
  return (
    <>
      <div className="absolute -z-20 -translate-x-1/2 -translate-y-1/2 left-[50%] -top-[12%]  w-1/2 rotate-6 h-[60%] bg-[#4f55c1] rounded-lg mix-blend-multiply filter blur-[100px] opacity-40"></div>
      <div className="absolute -z-20 -bottom-8 lg:-bottom-1/4 left-20 lg:right-0 lg:left-auto w-2/5 h-2/3 lg:rotate-45 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
    </>
  );
}

export default BlobComp;
