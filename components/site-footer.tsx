import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark mt-56 p-8">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="w-full grid grid-cols-1 py-6 gap-10 lg:py-8 md:grid-cols-2 lg:grid-cols-4 mb-5 sm:mb-0">
          <div className="lg:col-span-1">
            <h2 className="text-xl mb-3 font-bold dark:text-white/80">
              Explorer
            </h2>
            <ul className="text-slate-500 dark:text-slate-500 font-medium space-y-2">
              <li>
                <a href="#" className=" hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Abouts us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-xl mb-3 font-bold dark:text-white/80">
              Services
            </h2>
            <ul className="text-slate-500 dark:text-slate-500 font-medium space-y-2">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Business integration of LLMs / LMMs and Generative AI
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Data Science and AI Engineering projects
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Web site and application development
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Mobile application development
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  API development and database management
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <div className="text-3xl text-gray-400 ml-0 mt-5 mb-6 md:mt-0 flex space-x-10 items-center">
              <a
                href="https://linkedin.com/in/mario-francisco-randrianandrasana-b64151196"
                target="_blank"
              >
                <div className="inline-flex justify-center items-center">
                  <AiFillLinkedin />
                </div>
              </a>
              <a href="#" target="_blank">
                <div className="inline-flex justify-center items-center">
                  <AiFillFacebook />
                </div>
              </a>
              <a href="https://twitter.com/happymalyo" target="_blank">
                <div className="inline-flex justify-center items-center">
                  <FaXTwitter />
                </div>
              </a>
            </div>
            <ul className="text-slate-500 dark:text-slate-500 font-xs space-y-5">
              <li className="mb-4">
                <a href="#" target="_blank" className="flex text-sm">
                  <Mail className="mr-2" />
                  contact@smartpredictservices.com
                </a>
              </li>
              <li className="mb-4 flex">
                <MapPin className="mr-2" />
                FRANCE, 10 rue de penthièvre, 75008 Paris
              </li>
              <li className="mb-4 flex">
                <Smartphone className="mr-2" />
                +33 1 85 14 92 83
              </li>
              <li className="mb-4 flex">
                <MapPin className="mr-2" />
                MADAGASCAR, Cap 3000 Andraharo, Antananarivo
              </li>
              <li className="mb-4 flex">
                <Smartphone className="mr-2" />
                +261 34 84 323 52
              </li>
            </ul>
          </div>
        </div>
        <div className="py-0 md:py-6 sm:py-5 flex items-center flex-col md:flex-row justify-between">
          <div className="mb-5 sm:m-0 md:flex space-x-6 mx-auto">
            <span className="hidden lg:block text-slate-600 text-center">
              Copyright © 2024 SmartPredict Services. All rights reserved
            </span>
            <div className="md:space-x-6 text-sm sm:text-base text-nowrap">
              <span className="text-slate-400  sm:text-center hover:underline">
                <a href="#">Privacy Policy</a>
              </span>
              <span className="text-slate-400  sm:text-center"> | </span>
              <span className="text-slate-400  sm:text-center hover:underline">
                <a href="#">Terms of Use</a>
              </span>
              <span className="text-slate-400  sm:text-center"> | </span>
              <span className="text-slate-400  sm:text-center hover:underline">
                <a href="#">Legal</a>
              </span>
            </div>
          </div>
          <div className="flex sm:justify-center mx-auto md:mx-0 md:mt-0 space-x-3 rtl:space-x-reverse">
            <span className="text-slate-600 hover:underline cursor-pointer">
              English
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-600 hover:underline cursor-pointer">
              Français
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center text-center text-sm sm:text-base text-balance lg:hidden text-slate-600 my-3 justify-center">
        Copyright © 2024 SmartPredict Services. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
