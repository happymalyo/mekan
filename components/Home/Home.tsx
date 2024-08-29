import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import Testimonial from "../Testimonial/Testimonial";
import Advantages from "./Advatanges/Advantages";
import Projects from "../Projects/Projects";
import TheyTrusUs from "../TheyTrustUs/TheyTrusUs";
import Team from "../Team/Team";
// Images import
import stacks from "../../public/image.png";
import bgHome from "../../public/bg-home.svg";
import Services from "../Services/Services";
import ChatBot from "../ChatBot/ChatBot";

export const Home = () => {
  return (
    <>
      <section className="banner lg:mt-[50px] sm:relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl lg:text-5xl text-center text-balance">
            Experts for your IT & Data
          </h1>
          <p className="mt-4 lg:text-xl text-balance text-center text-black dark:text-white">
            Entrust your IT and data projects to our expert teams. Develop a
            solution tailored to your needs. Focus on your core business and
            boost your growth.
          </p>
          <Button size={"lg"} className="dark:bg-secondary mt-8 z-20 sm:mt-12">
            New SmartProject
          </Button>
          <div
            className="relative md:-top-[160px] -top-20 lg:-top-[270px] z-10"
            style={{
              position: "relative",
              height: "100px",
              right: "14px",
            }}
          >
            <Image
              src={bgHome}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              alt="SmartPredict home bg"
              className="object-contain  z-10"
            />
          </div>
        </div>
        <div className="sm:relative sm:bottom-20 md:-top-20 lg:top-0 lg:mt-52 mt-32">
          <h2 className="relative lg:text-2xl font-bold md:text-sm z-20">
            IT outsourcing that lives up to your expectations
          </h2>
          <p className="max-w-md text-pretty text-sm relative mt-6 dark:text-slate-200 z-20">
            Thanks to our mastery of the most sought-after technologies, we can
            offer you reliable remote services in line with International
            standards, at attractive prices.
          </p>
        </div>
        <Advantages />
      </section>
      <section className="Projects">
        <Projects />
      </section>
      <section className="they-trust-us">
        <TheyTrusUs />
      </section>

      <section className="testimonials">
        <Testimonial />
      </section>

      <section className="services">
        <Services />
      </section>

      <section className="teams">
        <Team />
      </section>

      <section className="technologies flex flex-wrap justify-center items-center mt-20 gap-0 z-10">
        <div className="flex flex-col items-center sm:items-start sm:w-1/3">
          <h2 className="text-3xl mb-4">Our technologies</h2>
          <p className="text-balance text-center sm:text-left text-muted-foreground">
            To bring your IT project to fruition, our experts use the best
            technology on the market.
          </p>
        </div>
        <div
          className="image sm:w-1/2 px-0"
          style={{ position: "relative", height: "400px" }}
        >
          <Image
            src={stacks}
            quality={100}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            alt="Technologies"
            className="object-fill"
          />
        </div>
      </section>

      <section className="newsletter relative flex justify-center w-full items-center sm:mt-15 sm:px-20 z-20">
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
      <section>{/* <ChatBot /> */}</section>
    </>
  );
};
