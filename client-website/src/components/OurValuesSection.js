import React, { useEffect } from "react";
import TypeAnimationComp from "./OurValuesSectionComps/TypeAnimationComp";

function OurValuesSection({ setLoading, indexLoad }) {
  useEffect(() => {
    setLoading((prevLoad) => {
      const newLoading = [...prevLoad];
      newLoading[indexLoad] = true;
      return newLoading;
    });
  }, []);
  return (
    <section className="pt-[834px] lg:pt-32">
      <div className="w-full h-auto bg-[url('https://live.21lab.co/nanosoft/wp-content/uploads/2018/09/10.jpg?id=1363')] bg-cover">
        <div className="bg-blue-950/75 w-full h-full flex flex-col py-24 space-y-3 justify-between items-center">
          <p className="text-white text-lg lg:text-5xl">Our values</p>
          <TypeAnimationComp />
          <p className="text-white text-center text-lg px-3 lg:text-2xl">
            These values give us the foundations we need.
          </p>

          <a href="https://www.youtube.com/@BrainAutoTech" target="_blank" title="YouTube">
            <div className="bg-white rounded-full w-20 h-20 !mt-10 relative animate-bounce cursor-pointer">
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-7 w-7">
                
                <img
                  className="h-full w-full rotate-90 "
                  src="https://img.icons8.com/emoji/96/red-triangle-pointed-up-emoji.png"
                  alt="red-triangle-pointed-up-emoji"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default OurValuesSection;
