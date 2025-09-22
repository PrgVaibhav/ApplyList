"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ACCORDION_DATA } from "@/lib/data";
import { ChevronDown, EyeClosed, Mail, UserRound } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import React, { useState } from "react";

const Register = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(1);

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <section>
      <div className="flex min-h-screen flex-col-reverse sm:flex-row">
        {/* Left Side (FAQ) */}
        <div className="relative w-full sm:w-[60%] p-8 bg-gradient-to-br from-[#1E1E1E] to-[#111] shadow-xl">
          <div className="max-w-2xl mx-auto">
            {/* Heading */}
            <h1 className="primary-font font-bold text-4xl leading-relaxed text-white">
              ApplyList.
            </h1>
            <p className="text-neutral-400 mt-2 secondary-font">
              Track all your job applications in one place. Here are some quick
              FAQs to help you understand how it works:
            </p>

            {/* Accordion */}
            <div className="mt-8 flex flex-col gap-4">
              {ACCORDION_DATA.map((data) => (
                <div
                  key={data.id}
                  className="bg-neutral-900 rounded-xl overflow-hidden shadow-md"
                >
                  {/* Question */}
                  <div
                    className={`p-3 flex items-center justify-between  cursor-pointer hover:bg-neutral-950 transition-colors  ${
                      activeDropdown === data.id ? "bg-neutral-950" : ""
                    }`}
                    onClick={() => toggleDropdown(data.id)}
                  >
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-sm text-neutral-500 font-inter">
                        Q{data.id}.
                      </span>
                      <h2 className="text-md sm:text-lg font-medium font-sans">
                        {data.question}
                      </h2>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-neutral-400 transition-transform duration-300 ${
                        activeDropdown === data.id ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>

                  {/* Answer */}
                  <div
                    className={`px-5 bg-neutral-950 overflow-hidden transition-all duration-300 ease-in-out  ${
                      activeDropdown === data.id
                        ? "max-h-40 sm:max-h-20 py-4"
                        : "max-h-0"
                    }`}
                  >
                    <p className="text-neutral-300 text-sm secondary-font">
                      {data.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side (Login Section Placeholder) */}
        <div className="w-full sm:w-[40%] flex items-center justify-center p-8  bg-neutral-950 text-white">
          <div className=" flex flex-col gap-8 w-full">
            <div>
              <h1 className="font-roboto text-3xl font-medium ">Welcome 👋</h1>
              <p className="font-poppins text-sm text-gray-400">
                Let's create your account
              </p>
            </div>

            <div className="flex flex-col gap-6 w-full">
              <div className="w-full flex flex-col gap-2 relative">
                <Label htmlFor="username">Username*</Label>
                <div className="relative">
                  <p className="absolute top-1/2 -translate-y-1/2 left-2 peer-focus:text-blue-400 peer-focus:scale-105 transition">
                    <UserRound size={18} />
                  </p>
                  <Input
                    id="username"
                    placeholder="What's your username?"
                    type="text"
                    className="peer ring ring-gray-400 border-none focus:ring-1 focus:ring-blue-400 h-11 pl-8"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col gap-2 relative">
                <Label htmlFor="email">Email*</Label>
                <div className="relative">
                  <p className="absolute top-1/2 -translate-y-1/2 left-2 peer-focus:text-blue-400 peer-focus:scale-105 transition">
                    <Mail size={18} />
                  </p>
                  <Input
                    id="email"
                    placeholder="What's your email?"
                    type="email"
                    className="peer ring ring-gray-400 border-none focus:ring-1 focus:ring-blue-400 h-11 pl-8"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col gap-2 relative">
                <Label htmlFor="password">Password*</Label>
                <div className="relative">
                  <Input
                    id="password"
                    placeholder="Create a strong password?"
                    type="password"
                    className="peer ring ring-gray-400 border-none focus:ring-1 focus:ring-blue-400 h-11"
                  />
                  <p className="absolute top-1/2 -translate-y-1/2 right-4 peer-focus:text-blue-400 peer-focus:scale-105 transition">
                    <EyeClosed size={18} />
                  </p>
                </div>
              </div>

              <div className="w-full">
                <Button size={"lg"} className="bg-blue-700 w-full ">
                  Let's start tracking!!
                </Button>
              </div>

              <div className="">
                <p className="text-sm">
                  Already have an account?{" "}
                  <Link href={"/login"} className="font-bold">
                    Sign In
                  </Link>
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-full h-[1px] bg-gradient-to-r from-[#1E1E1E] to-[#111]" />
                  <p>or</p>
                  <div className="w-full h-[1px] bg-gradient-to-r from-[#1E1E1E] to-[#111]" />
                </div>

                <div className="w-full">
                  <Button size={"lg"} className="bg-white text-black w-full ">
                    <FcGoogle /> Sign up with Google
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
