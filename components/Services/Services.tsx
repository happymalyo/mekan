import React from "react";
import Image from "next/image";
import logoGenaI from "../../public/generative/img-1.svg";
import aiImage from "../../public/generative/img-1.png";
import cloudApi from "../../public/generative/img-3.png";
import webSite from "../../public/generative/img-2.png";
import { Button } from "../ui/button";

const Services = () => {
  const logoWidth = "80px";
  const logoDivWidth = "80px";
  return (
    <div className="flex flex-col highLg:grid highLg:grid-cols-2 lg:gap-0 highLg:gap-x-20 highLg:px-20 mt-40">
      <div className="flex flex-col highLg:w-full mb-12">
        <div
          className="gen-ai-image flex flex-col z-10 mb-5"
          style={{
            position: "relative",
            height: `${logoDivWidth}`,
          }}
        >
          <Image
            src={logoGenaI}
            quality={100}
            style={{
              maxWidth: `${logoWidth}`,
              height: "auto", //200px if generic
            }}
            alt="Gen Ai"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col z-20">
          <div className="gen-ai-title mb-8">
            <h1 className="md:text-wrap highLg:w-96 text-balance md:text-xl">
              Business integration of LLMs, LMMs and Generative AI
            </h1>
          </div>
          <div className="gen-ai-list flex flex-wrap">
            <div className="flex items-center justify-center text-xs rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-1">
              RAG Solutions, Advanced & Modular RAG
            </div>
            <div className="flex items-center justify-center text-xs rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-1">
              Autonomous Agents
            </div>
            <div className="flex items-center justify-center text-xs rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-1">
              Implementation of Multi-Agent systems
            </div>
            <div className="flex items-center justify-center text-xs rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-1">
              OpenAI LLM Fine-Tuning
            </div>
            <div className="flex items-center justify-center text-xs rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-1">
              Open Source LLM Deployment
            </div>
          </div>
          <div className="gen-ai-description mt-3">
            <p className="text-sm text-slate-400 text-balance h-full highLg:mb-5">
              We support you in your transition to a more efficient technology
              ecosystem, through specialised services in generative AI, designed
              to optimise your operations and drive innovation.
            </p>
          </div>
        </div>
        <div className="highLg:mt-auto flex flex-row gap-1 my-5">
          <Button
            size={"lg"}
            className="dark:bg-secondary h-8 rounded-lg text-black p-4 text-xs sm:p-5 sm:text-sm"
          >
            Start Generative AI
          </Button>
          <Button
            size={"lg"}
            className="dark:bg-tertiary text-secondary-foreground h-8 rounded-lg p-4 text-xs sm:p-5 sm:text-sm"
          >
            Learn more
          </Button>
        </div>
      </div>
      <div className="flex flex-col highLg:w-full mb-12">
        <div
          className="gen-ai-image flex flex-col z-10 mb-5"
          style={{
            position: "relative",
            height: `${logoDivWidth}`,
          }}
        >
          <Image
            src={aiImage}
            quality={100}
            style={{
              maxWidth: `${logoWidth}`,
            }}
            alt="Gen Ai"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col z-20">
          <div className="gen-ai-title mb-8 z-40">
            <h1 className="md:text-wrap highLg:w-96 text-balance md:text-xl">
              Data Science and Artificial Intelligence Engineering projects
            </h1>
          </div>
          <div className="gen-ai-list flex flex-wrap">
            <div className="flex items-center justify-center text-sm rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-2">
              DL, ML, Big Data
            </div>
            <div className="flex items-center justify-center text-sm rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-2">
              MLOps and DataOps
            </div>
            <div className="flex items-center justify-center text-sm rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-2">
              DL, ML, Big Data
            </div>
            <div className="flex items-center justify-center text-sm rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-2">
              Predictive Analytics, BI
            </div>
          </div>
          <div className="gen-ai-description mt-3">
            <p className="text-base text-balance h-full highLg:mb-5">
              We can help you realize your AI projects in the best possible
              conditions, thanks to powerful Data Science and Machine Learning
              technological tools.
            </p>
          </div>
        </div>
        <div className="highLg:mt-auto flex flex-row gap-1 my-5">
          <Button
            size={"lg"}
            className="dark:bg-secondary h-8 rounded-lg text-black p-4 text-xs sm:p-5 sm:text-sm"
          >
            Start AI project
          </Button>
          <Button
            size={"lg"}
            className="dark:bg-tertiary text-secondary-foreground h-8 rounded-lg p-4 text-xs sm:p-5 sm:text-sm"
          >
            Learn more
          </Button>
        </div>
      </div>
      <div className="flex flex-col highLg:w-full mb-12">
        <div className="gen-ai-image flex flex-col z-10 mb-5">
          <Image
            src={cloudApi}
            quality={100}
            style={{
              maxWidth: `${logoWidth}`,
            }}
            alt="Gen Ai"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col z-20">
          <div className="gen-ai-title mb-8 z-40">
            <h1 className="md:text-wrap highLg:w-96 text-balance md:text-xl">
              Cloud API development and database management
            </h1>
          </div>
          <div className="gen-ai-list flex flex-wrap">
            <div className="flex items-center justify-center text-sm rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-2">
              API, Back-End
            </div>
            <div className="flex items-center justify-center text-sm rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-2">
              Multi-tenant
            </div>
            <div className="flex items-center justify-center text-sm rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-2">
              Serverless deployment
            </div>
            <div className="flex items-center justify-center text-sm rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-2">
              Cloud Infrastructure
            </div>
            <div className="flex items-center justify-center text-sm rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-2">
              Microservices architecture
            </div>
            <div className="flex items-center justify-center text-sm rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-2">
              RGPD compliant
            </div>
          </div>
          <div className="gen-ai-description mt-3">
            <p className="text-base text-balance h-full highLg:mb-5">
              We&apos;ll help you develop your customized API system and
              back-end code structure, to improve your business processes and
              free you from even the most complex and voluminous database
              management.
            </p>
          </div>
        </div>
        <div className="highLg:mt-auto flex flex-row gap-1 my-5">
          <Button
            size={"lg"}
            className="dark:bg-secondary h-8 rounded-lg text-black p-4 text-xs sm:p-5 sm:text-sm"
          >
            Get My API
          </Button>
          <Button
            size={"lg"}
            className="dark:bg-tertiary text-secondary-foreground h-8 rounded-lg p-4 text-xs sm:p-5 sm:text-sm"
          >
            Learn more
          </Button>
        </div>
      </div>
      <div className="flex flex-col highLg:w-full mb-12">
        <div className="gen-ai-image flex flex-col highLg:justify-end highLg:relative highLg:h-[170px]  z-10 mb-5">
          <Image
            src={webSite}
            quality={100}
            style={{
              maxWidth: "150px",
              height: "auto",
            }}
            alt="Gen Ai"
            className="object-contain w-full h-fill"
          />
        </div>
        <div className="flex flex-col z-20">
          <div className="gen-ai-title mb-8 z-40">
            <h1 className="md:text-wrap highLg:w-96 text-balance md:text-xl">
              Data Science and Artificial Intelligence Engineering projects
            </h1>
          </div>
          <div className="gen-ai-list flex flex-wrap">
            <div className="flex items-center justify-center text-sm rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-2">
              Front-End
            </div>
            <div className="flex items-center justify-center text-sm rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-2">
              Back-End
            </div>
            <div className="flex items-center justify-center text-sm rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-2">
              Responsive design
            </div>
            <div className="flex items-center justify-center text-sm rounded-full md:h-10 bg-slate-500/20 py-2 px-3 mb-2 md:mb-5 mr-2">
              Tailor-made solutions
            </div>
          </div>
          <div className="gen-ai-description mt-3">
            <p className="text-base text-balance h-full highLg:mb-5">
              Thanks to our high-level expertise, we can carry out tailor-made
              Web projects to help you strengthen your online presence and boost
              the power of your brand.
            </p>
          </div>
        </div>
        <div className="highLg:mt-auto flex flex-row gap-1 my-5">
          <Button
            size={"lg"}
            className="dark:bg-secondary h-8 rounded-lg text-black p-4 text-xs sm:p-5 sm:text-sm"
          >
            New Project
          </Button>
          <Button
            size={"lg"}
            className="dark:bg-tertiary text-secondary-foreground h-8 rounded-lg p-4 text-xs sm:p-5 sm:text-sm"
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
