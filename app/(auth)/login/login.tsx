"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ACCORDION_DATA } from "@/lib/data";
import {
  BellRing,
  ChevronDown,
  EyeClosed,
  File,
  LayoutDashboard,
  UserRound,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(1);

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <section>
      <div className="flex min-h-screen flex-col-reverse sm:flex-row">
        {/* Left Side (Motivational Section) */}
        <div className="relative w-full sm:w-[60%] p-10 bg-gradient-to-br from-[#1E1E1E] to-[#111] shadow-xl flex items-center justify-center">
          <div className="max-w-lg mx-auto space-y-10 animate-fadeIn">
            {/* Heading */}
            <div>
              <h1 className="primary-font font-extrabold text-4xl sm:text-5xl leading-snug text-white">
                Stay Ahead in Your Job Hunt
              </h1>
              <p className="text-neutral-400 mt-4 secondary-font text-lg leading-relaxed">
                <span className="font-bold">ApplyList</span> helps you track
                applications, refine your resume, and stay on top of every
                opportunity all in one place.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/10 p-2 rounded-lg">
                  <LayoutDashboard className="text-blue-400 h-5 w-5" />
                </div>
                <p className="text-neutral-300 text-md">
                  Manage all your applications with a simple, organized
                  dashboard.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-600/10 p-2 rounded-lg">
                  <File className="text-green-400 h-5 w-5" />
                </div>
                <p className="text-neutral-300 text-md">
                  Get AI-powered insights to strengthen your resume instantly.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-600/10 p-2 rounded-lg">
                  <BellRing className="text-yellow-400 h-5 w-5" />
                </div>
                <p className="text-neutral-300 text-md">
                  Never miss a deadline or follow-up with smart reminders.
                </p>
              </div>
            </div>

            {/* Footer Motivation */}
            <p className="text-sm text-neutral-500 border-t border-neutral-800 pt-6">
              <span className="font-bold">ApplyList</span> keeps you focused
              until you land your dream role.
            </p>
          </div>
        </div>

        {/* Right Side (Login Section Placeholder) */}
        <div className="w-full sm:w-[40%] flex items-center justify-center p-8  bg-neutral-950 text-white">
          <div className=" flex flex-col gap-8 w-full">
            <div>
              <h1 className="font-roboto text-3xl font-medium ">Welcome 👋</h1>
              <p className="font-poppins text-sm text-gray-400">
                Let's login to your account
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
                <Label htmlFor="password">Password*</Label>
                <div className="relative">
                  <Input
                    id="password"
                    placeholder="What's your password?"
                    type="password"
                    className="peer ring ring-gray-400 border-none focus:ring-1 focus:ring-blue-400 h-11"
                  />
                  <p className="absolute top-1/2 -translate-y-1/2 right-4 peer-focus:text-blue-400 peer-focus:scale-105 transition">
                    <EyeClosed size={18} />
                  </p>
                </div>
                <div className="self-end">
                  <p className="text-xs sm:text-sm font-normal">
                    Forgot Password?
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
                  Don't have an account?{" "}
                  <Link href={"/register"} className="font-bold">
                    Create Account
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

export default Login;
