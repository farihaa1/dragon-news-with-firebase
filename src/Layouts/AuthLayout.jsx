import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="font-poppins bg-[#f3f3f3] min-h-screen">
      <header className="py-3 w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <div className="flex justify-center  py-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
