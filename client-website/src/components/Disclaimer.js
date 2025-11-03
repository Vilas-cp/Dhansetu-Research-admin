import React from 'react';



const Dot = () => (
  <span className="inline-block w-2 h-2 bg-white rounded-full mx-3 align-middle"></span>
);

export default function DisclaimerMarque() {
  const warningText =
    'Important Note: Beware of scammers! Only trust official communications and payment details from Dhansetu Research. Dhansetu Research is not connected directly or indirectly to any other companies.';

 
  const repeated = Array.from({ length: 5 });

  return (
    <div className="w-full bg-[#4169e1] text-white py-3 overflow-hidden relative shadow-lg">
    
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat animate-slide"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)',
          }}
        ></div>
      </div>

      {/* Marquee content */}
      <div className="flex items-center gap-4 relative">
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap inline-flex items-center">
            {repeated.map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-sm md:text-base font-medium tracking-wide">
                  {warningText}
                </span>
                <Dot />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slide {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-slide {
          animation: slide 1s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
