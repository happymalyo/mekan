import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import Testimonial from "../Testimonial/Testimonial";
import Advantages from "./Advatanges/Advantages";
import Video from "../Video";
import Mission from "../Mission";
import Team from "../Team/Team";
import Blog from "../Blog";
// Images import
import stacks from "../../public/image.png";
import bgHome from "../../public/hero_1.jpg";
import heroBot from "../../public/hero_2.png";
import heroMan from "../../public/hero_2_1.jpeg";
import imgApp from "../../public/app-process.webp";
import Services from "../Services/Services";
import ChatBot from "../ChatBot/ChatBot";
import ScrollToTop from "../ScrollToTop";

export const Home = () => {
  return (
    <>
      <section className="main">
        <div className="flex">
          <div className="grid py-8 mx-auto px-10 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto lg:col-span-8">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Payments tool for software companies
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                From checkout to global sales tax compliance, companies around
                the world use Flowbite to simplify their payment stack.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Speak to Sales
              </a>
            </div>
            <div className="hidden rotate-6 lg:mt-0 lg:col-span-4 lg:flex">
              <Image
                src={heroBot}
                style={{
                  maxWidth: "100%",
                  height: "100%",
                }}
                className="drop-shadow-2xl"
                alt="Hero home bg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row rotate-12 px-1/2 gap-20">
          <div className="ml-auto">
            <Image
              src={heroMan}
              style={{
                width: "100%",
              }}
              alt="Hero home bg"
              className="max-w-md border-4 -rotate-45 border-grey-400"
            />
          </div>
          <div className="ml-auto">
            <Image
              src={bgHome}
              alt="Hero home bg"
              className="max-w-md border-4 border-red-400"
            />
          </div>
          <div className="max-w-7xl ">
            <h2 className="max-w-lg lg:text-4xl font-bold md:text-sm z-20">
              IT outsourcing that lives up to your expectations
            </h2>
            <p className="max-w-md text-pretty text-sm relative mt-6 dark:text-slate-200 z-20">
              Thanks to our mastery of the most sought-after technologies, we
              can offer you reliable remote services in line with International
              standards, at attractive prices.
            </p>
          </div>
        </div>
        <div className="flex w-full mt-44 px-20 gap-0">
          <div className="ml-auto">
            <Image
              src={imgApp}
              style={{
                maxWidth: "80%",
                height: "auto",
              }}
              className="drop-shadow-2xl"
              alt="Hero home bg"
            />
          </div>
          <Advantages />
        </div>
      </section>
      <section className="Projects">
        <Video />
      </section>
      <section className="they-trust-us">
        <Mission />
      </section>

      <section className="testimonials">
        <Testimonial />
      </section>

      <section className="services">
        <Blog />
      </section>

      <section className="teams">
        <Team />
      </section>

      <section className="pt-28 md:pt-28 lg:pt-28 relative flex justify-center w-full items-center sm:mt-15 sm:px-20 z-20">
        <div className="flex flex-col bg-slate-500/20 rounded-lg p-3 sm:p-10">
          <h2 className="ml-0 text-xl mb-4 w-full flex-grow">
            Get the latest news
          </h2>
          <p className="text-pretty text-muted-foreground w-full flex-grow">
            Keep up with innovation, trends, opportunities meet, and upcoming
            events.
          </p>
          <div className="flex flex-row  mt-4 ">
            <div className="flex w-full items-center space-x-2 sm:space-x-8 shrink grow">
              <Input
                type="email"
                className="lg:w-[448px] py-[24px] sm:py-7"
                placeholder="Enter your email"
              />
              <Button
                type="submit"
                className="bg-secondary sm:py-7"
                size={"lg"}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ChatBot />
        <ScrollToTop/>
      </section>
    </>
  );
};
