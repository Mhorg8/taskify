import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa6";
const RegisterPage = () => {
  return (
    <div className="w-full h-full lg:h-[calc(100dvh-80px)] py-5">
      <div className="container flex items-center gap-3 w-full h-full">
        {/* left section */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-center h-full">
          <h2 className="text-4xl font-extrabold mt-10">
            Welcome to Task<span className="text-red">pro</span>
          </h2>
          <p className="text-center text-zinc-600 leading-5 mt-5">
            Simplify your workflow and boost your productivity <br />
            with Taskpro App. Get start for free.
          </p>

          <form className="mt-10 w-[350px] md:w-[400px] lg:w-[500px] flex flex-col items-center justify-between h-full">
            <div className="flex flex-col items-center justify-between gap-5">
              <Input className="w-full" placeholder="Email" type="email" />
              <Input className="w-full" placeholder="Username" type="text" />
              <Input
                className="w-full"
                placeholder="password"
                type="password"
                autoComplete="false"
              />
              <CustomButton className="w-full font-bold text-lg rounded-full text-white py-3 cursor-pointer mt-5">
                Create
              </CustomButton>

              <div className="relative w-full h-[2px] bg-black/40 my-7">
                <p className="absolute -top-3 left-1/2 bg-[#fff] -translate-x-1/2 ">
                  or continue with
                </p>
              </div>

              <div className="flex items-center justify-center gap-5">
                <button className="bg-black text-white rounded-full p-4 hover:scale-110 hoverEffect cursor-pointer">
                  <FaGoogle size={22} />
                </button>
                <button className="bg-black text-white rounded-full p-4 hover:scale-110 hoverEffect cursor-pointer">
                  <FaApple size={22} />
                </button>
                <button className="bg-black text-white rounded-full p-4 hover:scale-110 hoverEffect cursor-pointer">
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
        <div className="absolute top-0 right-0 w-full h-full md:static md:w-1/2 bg-red rounded-2xl">
          <div className="relative w-full h-full">
            {/* <Image src="" alt="" fill sizes="fill" /> */}s
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
