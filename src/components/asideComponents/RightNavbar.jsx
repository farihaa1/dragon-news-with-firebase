import React from "react";
import FindUs from "../FindUs/FindUs";
import LoginWith from "../LoginWith/LoginWith";


const RightNavbar = () => {
  return (
    <div className="flex flex-col">
      <LoginWith></LoginWith>
      <FindUs></FindUs>
    </div>
  );
};

export default RightNavbar;
