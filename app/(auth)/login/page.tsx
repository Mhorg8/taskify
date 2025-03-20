"use client";
import { signIn } from "next-auth/react";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { useAppSelector } from "@/lib/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa6";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const darkmood = useAppSelector((state) => state.theme.darkmood);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userInformation = Object.fromEntries(formData.entries());

    const response = await signIn("credentials", {
      email: userInformation.email,
      password: userInformation.password,
      redirect: false,
    });

    if (response) {
      redirect("/");
    } else {
      redirect("/login");
    }
  }

  return (
    <div className="w-full h-full lg:h-[calc(100dvh-80px)] py-5">
      <div className="container flex items-center gap-3 w-full h-full">
        {/* left section */}
        <div className="hidden w-full h-full lg:block md:w-1/2 rounded-2xl">
          <div className="relative w-full h-full md:bg-white ">
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
        {/* right section */}
        <div className="w-full lg:w-1/2 h-full z-20 py-4 flex flex-col justify-start items-center">
          <h2 className="text-4xl font-extrabold mt-10">
            Welcome <span className="text-red">Back</span>
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-300 leading-5 mt-5">
            Login to your account for a personalized experience. Access your
            tasks, manage your projects, and stay organized with ease.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 w-[320px] md:w-[400px] lg:w-[500px] flex flex-col items-center justify-between h-full "
          >
            <div className="w-full flex flex-col items-center justify-between gap-4">
              <CustomInput
                name="email"
                type="email"
                placeholder="example.com"
                label="Email"
                autoFocus
              />
              <CustomInput
                name="password"
                type="password"
                placeholder="********"
                label="Password"
              />
              <CustomButton
                text="Login"
                className="bg-black w-full py-4 dark:bg-white dark:text-black"
              />
              <div className="relative w-full h-[2px] dark:bg-white bg-black/40 my-7">
                <p className="absolute -top-3 left-1/2 bg-[#fff] -translate-x-1/2 dark:bg-black ">
                  or continue with
                </p>
              </div>

              <div className="flex items-center justify-center gap-5">
                <button className="social-media-icon hoverEffect ">
                  <FaGoogle size={22} />
                </button>
                <button className="social-media-icon hoverEffect ">
                  <FaApple size={22} />
                </button>
                <button className="social-media-icon hoverEffect ">
                  <FaFacebook size={22} />
                </button>
              </div>
              <div className="flex items-center gap-1 font-medium text-lg">
                <p>Dont have an account ?</p>
                <Link className="underline text-red " href="/register">
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
