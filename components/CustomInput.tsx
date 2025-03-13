"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { LuEye, LuEyeClosed } from "react-icons/lu";
interface Props {
  label?: string;
  type: string;
  name: string;
  labelClassName?: string;
  inputClassName?: string;
  placeholder?: string;
  dissable?: boolean;
  autoFocus?: boolean;
}

const CustomInput = ({
  label,
  type,
  name,
  labelClassName,
  inputClassName,
  placeholder,
  dissable,
  autoFocus,
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="w-full space-y-1    ">
      <Label className={`${labelClassName} ml-2 text-xl font-semibold`}>
        {label}
      </Label>
      <div className="w-full relative">
        <Input
          autoFocus={autoFocus}
          className={`${inputClassName} w-full shadow-sm text-base py-1 placeholder:text-sm`}
          type={showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
          disabled={dissable}
          aria-autocomplete={"none"}
        />

        {type === "password" && (
          <button
            onClick={() => setShowPassword(!showPassword)}
            type="button"
            className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-5"
          >
            {showPassword ? <LuEyeClosed size={20} /> : <LuEye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
