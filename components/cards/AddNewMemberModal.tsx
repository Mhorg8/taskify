"use client";
import React, { FormEvent } from "react";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import axios from "axios";
import { toast } from "sonner";
import { LuX } from "react-icons/lu";
import { useAppDispatch } from "@/lib/redux/hooks";
import { toggleAddNewMemberModal } from "@/lib/redux/theme";
import { IoClose } from "react-icons/io5";

const AddNewMemberModal = () => {
  const searchParams = new URLSearchParams(window.location.search);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cardId: string | null = searchParams.get("Id");
    const formData = new FormData(e.currentTarget);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    if (cardId) {
      formData.append("cardId", cardId);
    }
    const response = await axios.post(
      "/api/addingMemberToCard",
      formData,
      config
    );

    if (!response.data.isSucess) {
      toast.error(response.data.message);
    } else {
      toast.success(response.data.message);
    }
    dispatch(toggleAddNewMemberModal());
  };

  const dispatch = useAppDispatch();
  return (
    <div className="absolute top-0 left-0 w-full h-[100dvh] bg-black/30 shadow-sm dark:shadow-white  flex items-center justify-center">
      <div className="w-[400px] min-h-[380px] dark:text-black bg-white rounded-xl px-4 py-3 relative">
        <h2 className="text-center text-xl font-bold">Add new member</h2>

        <form onSubmit={handleSubmit} className="space-y-3 mt-5">
          <CustomInput
            name="username"
            type="text"
            label="Username"
            autoFocus
            placeholder="Mohammad"
          />
          <CustomInput
            name="email"
            type="email"
            label="Email"
            placeholder="example@gmail.com"
          />
          <CustomButton
            type="submit"
            text="Add"
            className="w-full py-4 mt-3 dark:bg-black dark:text-white bg-black font-extrabold"
          ></CustomButton>
        </form>

        <button
          className="cursor-pointer absolute top-2 right-4  bg-white hover:bg-zinc-300 rounded-full flex items-center justify-center p-2 hoverEffect"
          onClick={() => dispatch(toggleAddNewMemberModal())}
        >
          <IoClose size={24} />
        </button>
      </div>
    </div>
  );
};

export default AddNewMemberModal;
