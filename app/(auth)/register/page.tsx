"use client";
import Image from "next/image";
import React, { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa6";
import CustomInput from "@/components/CustomInput";
import { useAppSelector } from "@/lib/redux/hooks";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const RegisterPage = () => {
  const darkmood = useAppSelector((state) => state.theme.darkmood);
  const router = useRouter();
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const registerationData = Object.fromEntries(formData.entries());

    const response = await axios.post("/api/registerUser", registerationData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data.isSuccess) {
      toast.success(response.data.message);
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } else {
      toast.error(response.data.message);
    }
  }

  return (
    <div className="w-full h-full lg:h-[calc(100dvh-80px)] py-5">
      <div className="container flex items-center gap-3 w-full h-full">
        {/* left section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-center h-full z-20 py-4">
          <h2 className="text-4xl font-extrabold mt-10">
            Welcome to Task<span className="text-red">pro</span>
          </h2>
          <p className="text-center text-zinc-600 leading-5 mt-5">
            Simplify your workflow and boost your productivity <br />
            with Taskpro App. Get start for free.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 w-[320px] md:w-[400px] lg:w-[500px] flex flex-col items-center justify-between h-full"
          >
            <div className="flex flex-col items-center justify-between gap-5 w-full">
              <CustomInput
                name="email"
                label="Email"
                placeholder="example.com"
                type="email"
              />
              <CustomInput
                label="Username"
                name="username"
                placeholder="Username"
                type="text"
              />
              <CustomInput
                name="password"
                label="Passowrd"
                placeholder="password"
                type="password"
              />
              <CustomButton
                type="submit"
                text="Create"
                className="w-full font-bold text-lg rounded-full text-white py-3 cursor-pointer mt-5 dark:bg-white dark:text-black bg-black"
              />

              <div className="relative w-full h-[2px] dark:bg-white bg-black/40 my-7">
                <p className="absolute -top-3 left-1/2 dark:bg-black px-1 bg-[#fff] -translate-x-1/2 ">
                  or continue with
                </p>
              </div>

              <div className="flex items-center justify-center gap-5">
                <button className="social-media-icon hoverEffect">
                  <FaGoogle size={22} />
                </button>
                <button className="social-media-icon hoverEffect">
                  <FaApple size={22} />
                </button>
                <button className="social-media-icon hoverEffect">
                  <FaFacebook size={22} />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-1 font-medium text-lg">
              <p>Allready have an account ?</p>
              <Link className="underline text-red " href="/login">
                Login
              </Link>
            </div>
          </form>
        </div>
        {/* right section */}
        <div className="hidden w-full h-full lg:block md:w-1/2 rounded-2xl">
          <div className="relative w-full h-full md:bg-white">
            {darkmood !== "dark" ? (
              <Image
                className="block bg-black"
                src="/dark-register.png "
                alt=""
                fill
                sizes="fill"
              />
            ) : (
              <Image
                className="block "
                src="/register.jpg"
                alt=""
                fill
                sizes="fill"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
