import React from "react";
import "@/css/loader.css";
const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="lds-ring w-full ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
