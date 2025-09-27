"use client";
import testimonialCardDeatils from "@/data/TestimonialsSection/TestimonialsCardDetails";
import TestimonialCard from "./TestimonialsSection/TestimonialCard";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Testimonials = ({ setLoading, indexLoad}) => {
  const testimonialSectionRef = useRef();
  useGSAP(
    () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          toggleActions: "restart pause restart pause",
          trigger: ".testimonial-card-container",
          start: "40px bottom",
        },
      });

      for (let index = 1; index <= 3; index++) {
        t1.from(
          `.testimonial-card-${index}`,
          {
            y: 120,
            opacity: 0.4,
            duration: 1,
          },
          0
        ).to(
          `.testimonial-card-${index}`,
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2,
          },
          0
        );
      }
     setLoading((prevLoad) => {
       const newLoading = [...prevLoad];
       newLoading[indexLoad] = true;
       return newLoading;
     });
    },
    { scope: testimonialSectionRef }
  );

  return (
    <section ref={testimonialSectionRef} className="xl:pt-[8.5vh] pt-[80px]">
      <div className="pt-[50px] ">
        <div className="flex justify-center font-sans font-bold xl:text-[11px] text-[#627792] tracking-[.25em]">
          TESTIMONIALS
        </div>
        <div className="flex text-center justify-center text-[#0e2b5c] xl:text-[1.875rem] font-bold text-[3.5vh] ">
          What our customers say
        </div>
        <div className="w-full md:w-[80%] mx-auto h-auto py-5 mt-7 flex justify-evenly flex-row items-center flex-wrap testimonial-card-container">
          {testimonialCardDeatils.map((testimonialDetail, index) => (
            <TestimonialCard key={index} index={index} {...testimonialDetail} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
