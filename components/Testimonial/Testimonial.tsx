import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="flex mx-auto mt-10">
      <Slider {...settings} className="w-full flex">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/quotation-mark.svg"
            alt="quotation mark"
            width={20}
            height={20}
            className="object-contain mx-auto mb-5"
          />
          <p className="w-56 sm:w-80 text-center text-sm md:text-base h-full">
            Overall, I&apos;m satisfied because the SmartPredict profiles we
            work with are competent and professional. The developer played a key
            role between.
          </p>
          <Image
            src="/testimonials/img1.png"
            width={80}
            height={80}
            alt="Logo 1"
            className="object-contain mx-auto mt-8 mb-2"
          />
          <p className="text-xs text-gray-400 text-center mx-auto">
            Gaëtan Veyret
          </p>
          <h3 className="md:text-base text-gray-100 text-center mx-auto">
            <span className="text-sm">CEO</span>
            <span className="bottom-1 mx-2 relative font-bold text-xl">.</span>
            <span className="text-sm">Octolis</span>
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/quotation-mark.svg"
            alt="quotation mark"
            width={20}
            height={20}
            className="object-contain mx-auto mb-5"
          />
          <p className="w-56 sm:w-80 text-center text-sm md:text-base h-full">
            Overall, I&apos;m satisfied because the SmartPredict profiles we
            work with are competent and professional. The developer played a key
            role between.
          </p>
          <Image
            src="/testimonials/img2.png"
            width={80}
            height={80}
            alt="Logo 1"
            className="object-contain mx-auto mt-8 mb-2"
          />
          <p className="text-xs text-gray-400 text-center mx-auto">
            Martyah Slein Buya
          </p>
          <h3 className="md:text-base text-gray-100 text-center mx-auto">
            <span className="text-sm">CMO</span>
            <span className="bottom-1 mx-2 relative font-bold text-xl">.</span>
            <span className="text-sm">TechIndustry</span>
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/quotation-mark.svg"
            alt="quotation mark"
            width={20}
            height={20}
            className="object-contain mx-auto mb-5"
          />
          <p className="w-56 sm:w-80 text-center text-sm md:text-base h-full">
            Overall, I&apos;m satisfied because the SmartPredict profiles we
            work with are competent and professional. The developer played a key
            role between.
          </p>
          <Image
            src="/testimonials/img3.png"
            width={80}
            height={80}
            alt="Logo 1"
            className="object-contain mx-auto mt-8 mb-2"
          />
          <p className="text-xs text-gray-400 text-center mx-auto">
            Déborah Maïlika
          </p>
          <h3 className="md:text-base text-gray-100 text-center mx-auto">
            <span className="text-sm">System Security</span>
            <span className="bottom-1 mx-2 relative font-bold text-xl">.</span>
            <span className="text-sm">Alfame </span>
          </h3>
        </div>
      </Slider>
    </section>
  );
}
