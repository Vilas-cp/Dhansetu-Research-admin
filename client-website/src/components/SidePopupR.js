import React, {useState} from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import popUpsData from "@/data/ItServicesData/ItServicesData";

function SidePopup() {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen !== null && (
          <PopUp {...popUpsData[isOpen]} setIsOpen={setIsOpen} />
        )}
      </AnimatePresence>
      <div className="fixed z-[100] w-auto left-0 transform origin-bottom-left rotate-90 -translate-y-1/2 top-[36%] h-auto ">
        <div className="flex flex-col justify-evenly items-center">
          <div onClick={() => setIsOpen(7)}>
            <div className="lg:py-3 py-1 px-3 lg:px-3  bg-green-400 text-white text-lg lg:text-xl font-semibold
             lg:font-extrabold rounded-t-3xl cursor-pointer duration-300 ease-in-out hover:bg-green-700">
              ISO Certificate
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PopUp({ title, description, imgSrc, setIsOpen }) {
  return (
    <motion.div
      initial="hide"
      animate="show"
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
        type: "spring",
        velocity: 1.75,
      }}
      variants={{
        show: {
          opacity: 1,
          scale: 1,
        },
        hide: {
          opacity: 0,
          transition: {
            delay: 0,
            duration: 1,
            ease: "easeInOut",
            type: "spring",
            velocity: 1.75,
          },
        },
      }}
      onClick={() => setIsOpen(null)}
      className="fixed w-full h-[115dvh] top-0 left-0 z-[100] bg-[rgba(59,59,59,0.28)]
     flex justify-center items-center backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          type: "spring",
          damping: 25,
          stiffness: 500,
          velocity: 2,
        }}
        className="relative h-full w-full"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="xl:w-1/2 lg:w-3/5 md:w-3/4 w-4/5 h-auto absolute  -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-white rounded-lg"
        >
          <div className="h-[70px] py-5 relative border-slate-300 border-b-2">
            <h2 className="text-lg text-black font-semibold text-center">
              {title}
            </h2>
            <span
              onClick={() => setIsOpen(null)}
              className="absolute cursor-pointer text-lg md:text-2xl -translate-x-1/2 -translate-y-1/2 right-[5%] top-1/2 font-bold hover:text-red-700"
            >
              X
            </span>
          </div>
          <div className="flex flex-col items-center h-auto ">
            
            <div className="lg:w-1/2 w-full h-auto p-4 flex justify-evenly items-center">
              <img
                src={imgSrc}
                alt=""
                className="w-full sm:w-3/5 md:w-3/5 lg:w-[90%] xl:w-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SidePopup;
