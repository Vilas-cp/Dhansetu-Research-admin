import React from "react";

function SidePopup() {
  return (
    <div className="fixed z-[100] w-auto right-0 -translate-y-1/2 top-1/2 h-auto ">
      <div className="flex flex-col justify-evenly space-y-2 py-2 items-center pr-1">
        <a
          href="https://brainautotech.gitbook.io/intro/"
          target="_blank"
          title="Brain Auto Tech Docs"
        >
          <div className="h-10 w-10 bg-yellow-600 rounded-full flex items-center justify-evenly cursor-pointer duration-300 ease-in-out hover:bg-slate-700 hover:!invert-0">
            <img
              src="https://img.icons8.com/?size=128&id=GGrH2vfl6xO1&format=png"
              alt="Help"
              className="w-4/5 h-4/5 invert"
            />
          </div>
        </a>
        <a href="tel:+919179042673">
          <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-evenly cursor-pointer duration-300 ease-in-out hover:bg-slate-700 hover:!invert-0">
            <img
              className="w-[75%] h-[75%] invert"
              src="https://img.icons8.com/?size=100&id=53438&format=png"
              alt="phone--v1"
            />
          </div>
        </a>
        <a href="https://wa.me/919179042673" target="_blank" title="WhatsApp">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-evenly cursor-pointer fill-green-600 duration-300 ease-in-out hover:!fill-slate-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="2 3 45 45"
            >
              <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SidePopup;
