import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

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
  return (
    <div className="w-full space-y-1    ">
      <Label className={`${labelClassName} ml-2 text-xl font-semibold`}>
        {label}
      </Label>
      <Input
        autoFocus={autoFocus}
        className={`${inputClassName} w-full shadow-sm text-base py-1 placeholder:text-sm`}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={dissable}
      />
    </div>
  );
};

export default CustomInput;
